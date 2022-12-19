import { useState, useEffect } from 'react';
import axios from 'axios';
import sortBy from 'lodash/sortBy';
import groupBy from 'lodash/groupBy';

import { toKebabCase } from 'utils';

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

const Aside = () => {
	const [traitTypes, setTraitTypes] = useState([]);

	useEffect(() => {
		const getTraitTypes = async () => {
			const response = await axios.get(`/trait/?limit=1000&offset=0`);
			const traitTypes = response?.data?.results.map(({ value, trait_type, ...otherProps }) => ({
				name: toKebabCase(`${trait_type} ${value}`),
				id: toKebabCase(`${trait_type} ${value}`),
				label: value,
				value: trait_type,
				...otherProps,
			}))
			setTraitTypes(traitTypes);
		};
		// const groupedTraitTypes = sortBy(Object.entries(groupBy(traitTypes, 'value')), ([key]) => [key]);
		getTraitTypes();
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
