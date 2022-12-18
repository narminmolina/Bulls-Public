import { useCallback, useState } from 'react';

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

const FilterDropdown = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = useCallback(() => {
		setIsOpen(open => !open);
	}, [setIsOpen]);

	return (
		<div className="filter-dd">
			<button className={`filter-dd-title ${isOpen ? 'open' : null}`} onClick={toggleDropdown}>
				Sort By
			</button>
			{isOpen ? (
				<div className={`filter-dd-content  ${isOpen ? 'open' : null} `}>
					<div className="input-wrapper">
						<input type="radio" />
						<label htmlFor="label">Label</label>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default FilterDropdown;
