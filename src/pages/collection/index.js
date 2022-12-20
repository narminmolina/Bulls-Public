import { useEffect, useCallback, useState } from 'react';
import { isEmpty, sortBy } from 'lodash';

import { Button } from 'components/Button';
import { Base } from 'Base';
import Aside from './Aside';
import CollectionCard from './CollectionCard';
import './index.scss';
import { getCollectionItems } from '../../api/index';

const Collection = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [collection, setCollection] = useState([]);
	const [totalCount, setTotalCount] = useState(0);
	const [nextPageUrl, setNextPageUrl] = useState('');

	console.log({ collection, totalCount, nextPageUrl });

	useEffect(() => {
		(async () => {
			if (isEmpty(collection)) {
				setIsLoading(true);
				const { results, next, count } = await getCollectionItems();
				setCollection(sortBy(results, [item => item.img_url === null]));
				setNextPageUrl(next);
				setTotalCount(count);
				setIsLoading(false);
			}
		})();
	});

	const handleLoadMoreButtonClick = useCallback(async () => {
		setIsLoading(true);
		const { results, next } = await getCollectionItems(nextPageUrl);
		setCollection(prevCollection => [...prevCollection, ...results]);
		setNextPageUrl(next);
		setIsLoading(false);
	}, [nextPageUrl]);

	return (
		<Base title="CollectionPage">
			<div className="container extended">
				<div className="collection-wrapper">
					<Aside />
					<div className="collection-cards">
						<div className="card-wrapper">
							{collection?.map(props => (
								<CollectionCard key={props.token_id} totalCount={totalCount} {...props} />
							))}
						</div>
						<Button className="load-more-button" onClick={handleLoadMoreButtonClick} disabled={!nextPageUrl}>
							{isLoading ? 'Loading...' : nextPageUrl ? 'Load More' : 'Nothing to load'}
						</Button>
					</div>
				</div>
			</div>
		</Base>
	);
};

export default Collection;
