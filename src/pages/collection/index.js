import { useEffect, useCallback, useState } from 'react';
import { isEmpty, sortBy } from 'lodash';
import { useDebounce } from 'use-debounce';

import { Button } from 'components/Button';
import { Base } from 'Base';
import Aside from './Aside';
import FilterDropdown from 'components/FilterDropdown';

import CollectionCard from './CollectionCard';
import './index.scss';
import { getTraitTypes, getCollectionItems } from 'api';

const sortByOptions = [
	{ name: 'ordering', id: 'number', label: 'Bull ID ↑', value: 'number' },
	{ name: 'ordering', id: '-number', label: 'Bull ID ↓', value: '-number' },
	{ name: 'ordering', id: 'rarity_score', label: 'Rarity ↑', value: 'rarity_score' },
	{ name: 'ordering', id: '-rarity_score', label: 'Rarity ↓', value: '-rarity_score' },
];

const filterByOptions = [
	{ name: 'bonded', id: 'bonded', label: 'Bonded', value: 1 },
	{ name: 'bonded', id: 'non-bonded', label: 'Non-bonded', value: 0 },
];

const Collection = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [collection, setCollection] = useState([]);
	const [totalCount, setTotalCount] = useState(0);
	const [nextPageUrl, setNextPageUrl] = useState('');
	const [traitTypes, setTraitTypes] = useState([]);

	const [filters, setFilters] = useState({
		attributes: [],
		search: '',
		bonded: null,
		solana_owner_wallet: null,
		ordering: 'number',
	});

	const [debouncedFilters] = useDebounce(filters, 500);

	console.log({ collection, totalCount, nextPageUrl });

	useEffect(() => {
		(async () => {
			const traitTypes = await getTraitTypes();
			setTraitTypes(traitTypes);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			if (isEmpty(collection)) {
				setIsLoading(true);
				const { results, next, count } = await getCollectionItems(debouncedFilters);
				setCollection(sortBy(results, [item => item.img_url === null]));
				setNextPageUrl(next);
				setTotalCount(count);
				setIsLoading(false);
			}
		})();
	});

	const handleSearchInputChange = useCallback(
		event => {
			setFilters(result => ({ ...result, search: event.target.value }));
		},
		[setFilters]
	);
	const handleLoadMoreButtonClick = useCallback(async () => {
		setIsLoading(true);
		const { results, next } = await getCollectionItems({ ...debouncedFilters, nextPageUrl });
		setCollection(prevCollection => [...prevCollection, ...results]);
		setNextPageUrl(next);
		setIsLoading(false);
	}, [nextPageUrl, debouncedFilters]);

	return (
		<Base title="CollectionPage">
			<div className="container extended">
				<div className="collection-wrapper">
					<Aside
						title="Collection"
						description={
							<>
								Search the entire Bulls and Baby Bulls Collections.
								<br />
								Or connect your wallet and view your own collection
							</>
						}
					>
						<div className="tab-filter-buttons">
							<button className="active">Main</button>
							<button>Owned</button>
						</div>
						<div className="search-filters-wrapper">
							<input type="search" name="search" placeholder="Search" onChange={handleSearchInputChange} />
							<FilterDropdown title="Sort by" items={sortByOptions} setFilters={setFilters} inputType="radio" />
							<FilterDropdown title="Filter by" items={filterByOptions} setFilters={setFilters} inputType="radio" />
							{traitTypes.map(([key, values]) => (
								<FilterDropdown key={key} title={key} items={values} />
							))}
						</div>
						<div className="tesseract-key">
							<strong>KEYS</strong>
							<div className="key-item">
								<span className="tesseract-icon"></span>
								Bonded Tesseract (3d)
							</div>
						</div>
					</Aside>

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
