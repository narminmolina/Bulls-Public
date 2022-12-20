import { useState, useEffect } from 'react';
import { getTraitTypes } from 'api';

import FilterDropdown from 'components/FilterDropdown';

import './index.scss';

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

const getTraitTypes = async () => {
	const response = await axios.get(`https://launchpad.webisoft.org/api/trait/?limit=1000&ofset=0`);

	console.log({ response });

	const traitTypes = response?.data?.results.map(({ value, trait_type, ...otherProps }) => ({
		name: toKebabCase(`${trait_type} ${value}`),
		id: toKebabCase(`${trait_type} ${value}`),
		label: value,
		value: trait_type,
		...otherProps,
	}));

	console.log({
		//
		traitTypes,
		groupedTraitTypes: groupBy(traitTypes, 'value'),
		ObjectEntries: Object.entries(groupBy(traitTypes, 'value')),
		sortBy: sortBy(Object.entries(groupBy(traitTypes, 'value')), ([key]) => key),
	});

	return sortBy(Object.entries(groupBy(traitTypes, 'value')), ([key]) => key);
	// console.log(response.data.results, '🫠');

	// const traitTypes = response?.data?.results.map(({ value, trait_type, ...otherProps }) => ({
	// 	name: toKebabCase(`${trait_type} ${value}`),
	// 	id: toKebabCase(`${trait_type} ${value}`),
	// 	label: value,
	// 	value: trait_type,
	// 	...otherProps,
	// }));

	// console.log({ traitTypes });

	// setTraitTypes(response.data.results);
};

const ttt = ['asdasd', 'asdasd', 'sdasds', 'asdasd'];

const Aside = () => {
	const [traitTypes, setTraitTypes] = useState([]);

	useEffect(() => {
		(async () => {
			const traitTypes = await getTraitTypes();
			setTraitTypes(traitTypes);
		})();
	}, []);

	return (
		<aside>
			<h1 className="section-title">Collection</h1>
			<p className="section-description">
				Search the entire Bull Club Collections.
				<br /> Or connect your wallet and view your own collection
			</p>
			<div className="tab-filter-buttons">
				<button className="active">Main</button>
				<button>Owned</button>
			</div>
			<div className="search-filters-wrapper">
				<input type="search" name="search" placeholder="Search" />
				<FilterDropdown title="Sort by" items={sortByOptions} inputType="radio" />
				<FilterDropdown title="Filter by" items={filterByOptions} inputType="radio" />
				{traitTypes.map(([key, values]) => (
					<FilterDropdown key={key} title={key} items={values} />
				))}
				{traitTypes.map((traitType, index) => (
					<div key={index}>
						{traitType[0]} - {traitType[1].map(item => item.label)}
						<br />
						<br />
						<br />
					</div>
				))}
			</div>
			<div className="tesseract-key">
				<strong>KEYS</strong>
				<div className="key-item">
					<span className="tesseract-icon"></span>
					Bonded Tesseract (3d)
				</div>
			</div>
		</aside>
	);
};

export default Aside;
