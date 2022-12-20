import { sortBy } from 'lodash';
import { Button } from 'components/Button';
import { Base } from 'Base';
import CollectionCard from './CollectionCard';
import { useEffect, useCallback, useState } from 'react';
import Aside from './Aside';
import './index.scss';
import { getCollectionItems } from '../../api/index';

const Collection = () => {
	const [collection, setCollection] = useState([]);
	const [totalCount, setTotalCount] = useState(0);
	const [nextPageUrl, setNextPageUrl] = useState('');

	useEffect(() => {
		(async () => {
			const { results, next, count } = await getCollectionItems();
			setCollection(sortBy(results, [item => item.img_url === null]));
			setNextPageUrl(next);
			setTotalCount(count);
		})();
	}, []);

	const handleLoadMoreButtonClick = useCallback(async () => {
		const { results, next } = await getCollectionItems({ nextPageUrl });
		setCollection(prevCollection => [...prevCollection, ...results]);
		setNextPageUrl(next);

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
						<Button className="load-more-button" onClick={handleLoadMoreButtonClick}>
							{totalCount <= collection.length ? 'Nothing to load' : 'Load More'}
						</Button>
					</div>
				</div>
			</div>
		</Base>
	);
};

export default Collection;
