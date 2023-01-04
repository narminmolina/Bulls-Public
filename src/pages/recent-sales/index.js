import classNames from 'classnames';
import { useQuery } from 'react-query';
import { useDebounce } from 'use-debounce';
import { useCallback, useState } from 'react';

import { Base } from 'Base';
import { Link } from 'components/Link';
import { Aside } from 'components/Aside';
import { Loader } from 'components/Loader';
import { Button } from 'components/Button';
import { InputSearch } from 'components/InputSearch';
import { FilterDropdown } from 'components/FilterDropdown';
import { MarketplaceCard } from 'components/MarketplaceCard';
import { FilterTabButtons } from 'components/FilterTabButtons';

import magicEden from 'assets/img/partners-logos/magic-eden.svg';
import openSea from 'assets/img/partners-logos/opensea.svg';

import { partners } from 'constants';
import { getRecentSales } from 'api';
import './index.scss';

// const sortingRadios = [
// 	{ value: 'Price, low to high', trait_type: 'sort-by' },
// 	{ value: 'Price, high to low', trait_type: 'sort-by' },
// 	// { value: 'Rarest to common', trait_type: 'sort-by' },
// 	// { value: 'Common to rarest', trait_type: 'sort-by' },
// 	{ value: 'Date, new to old', trait_type: 'sort-by' },
// 	{ value: 'Date, old to new', trait_type: 'sort-by' },
// ];

const filterByOptions = [
	{ name: 'bonded', id: 'bonded', label: 'Bonded', value: 1 },
	{ name: 'bonded', id: 'non-bonded', label: 'Non-bonded', value: 0 },
];

const RecentSales = () => {
	const [activeTab, setActiveTab] = useState('sales');
	const [filters, setFilters] = useState({ search: '', bonded: null });
	const [debouncedFilters] = useDebounce(filters, 500);
	const [tableData, setTableData] = useState({ sales: [], listings: [] });
	const [totalCounts, setTotalCounts] = useState({ sales: 0, listings: 0 });
	const [nextPageUrls, setNextPageUrls] = useState({ sales: '', listings: '' });
	const [isMobileFilterMenuOpen, setIsMobileFilterMenuOpen] = useState(false);

	const { isLoading, isFetching } = useQuery(['recentSales', debouncedFilters], () => getRecentSales(debouncedFilters), {
		onSuccess: ({ tableData, next, count }) => {
			setTableData(tableData);
			setNextPageUrls(next);
			setTotalCounts(count);
		},
		refetchOnWindowFocus: false,
	});

	const handleTabChange = useCallback(tabKey => {
		setActiveTab(tabKey);
	}, []);

	const handleSearchInputChange = useCallback(
		event => {
			setFilters(filters => ({ ...filters, search: event.target.value }));
		},
		[setFilters]
	);

	const handleFilterButtonClick = useCallback(
		event => {
			setIsMobileFilterMenuOpen(isMobileFilterMenuOpen => !isMobileFilterMenuOpen);
		},
		[setIsMobileFilterMenuOpen]
	);

	const handleLoadMoreButtonClick = useCallback(async () => {
		const { tableData, next } = await getRecentSales({ ...debouncedFilters, nextPageUrls });
		setTableData(prevTableData => ({ sales: [...prevTableData.sales, ...tableData.sales], listings: [...prevTableData.listings, ...tableData.listings] }));
		setNextPageUrls(next);
	}, [nextPageUrls, debouncedFilters]);

	return (
		<Base title="Recent Sales">
			<div className="container-wrapper extended">
				<div className="recent-sales">
					<Aside title="Recent Sales">
						<FilterTabButtons defaultActiveKey="sales" items={['sales', 'listings']} onTabChange={handleTabChange} />
						<div className="search-filters-wrapper">
							<InputSearch value={filters.search} onChange={handleSearchInputChange} />
							<button className={classNames('filters-button', { active: isMobileFilterMenuOpen })} onClick={handleFilterButtonClick} />
						</div>
						<div className={classNames('trait-type-filters', { active: isMobileFilterMenuOpen })}>
							{/* <FilterDropdown className="sort-by" title="Sort by" items={sortingRadios} defaultIsOpen /> */}
							<FilterDropdown title="Filter by" items={filterByOptions} inputType="radio" setFilters={setFilters} defaultIsOpen clearable />
						</div>
						<div className="marketplaces">
							<strong>Secondary Marketplaces</strong>
							<ul className="market-places">
								{partners.map(({ title, logo, token_url }, index) => (
									<MarketplaceCard key={index} title={`Buy on ${title}`} url={token_url} logo={logo} />
								))}
							</ul>
						</div>
					</Aside>
					<div className="recent-sales-table">
						{isFetching || isLoading ? (
							<Loader />
						) : (
							<>
								<div className="recent-sales-table-header">
									<span className="name">Name</span>
									<span className="price">Price (SOL)</span>
									<span className="rank">Rank</span>
									<span className="marketplace">Marketplace</span>
									<span className="sold-at">Sold at</span>
								</div>
								<div className="recent-sales-table-body">
									{tableData[activeTab]?.map(({ img, key, link, name, price, rank, marketplace, date }) => (
										<div className="recent-sales-table-row" key={key}>
											<div className="name">
												<img src={img} alt={name} />
												<div className="name-text">
													<div>
														{/* <strong>{name?.split('#')[0]}</strong> */}
														<strong>Bull Club </strong>
														<span>#{name?.split('#')[1]}</span>
													</div>
													<time className="sold-at">{date}</time>
												</div>
											</div>
											<em className="price">{price}</em>
											<em className="rank">{rank}</em>
											{link ? (
												<a className="marketplace" href={link} target="_blank" rel="noopener noreferrer">
													<img src={link.includes('magiceden.io') ? magicEden : link.includes('opensea.io') ? openSea : null} alt="Marketplace" />
												</a>
											) : (
												'Unavailable'
											)}
											<time className="sold-at">{date}</time>
											<Link href={link} target="_blank" rel="noopener noreferrer" title="Visit Angel" variant="button-outlined">
												Open
											</Link>
										</div>
									))}
								</div>
							</>
						)}
						{!isFetching && !isLoading && (
							<Button className="load-more-button" onClick={handleLoadMoreButtonClick} disabled={totalCounts[activeTab] <= tableData[activeTab].length}>
								{totalCounts[activeTab] <= tableData[activeTab].length ? 'Nothing to load' : 'Load More'}
							</Button>
						)}
					</div>
				</div>
			</div>
		</Base>
	);
};

export default RecentSales;
