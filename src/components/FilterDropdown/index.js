import { useCallback, useState } from 'react';

import './index.scss';

const FilterDropdown = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = useCallback(() => {
		setIsOpen(open => !open);
	}, [setIsOpen]);

	return (
		<div className="filter-dd">
			<button className="filter-dd-title" onClick={toggleDropdown}>
				Sort By
			</button>
			<div className="filter-dd-content">
				<div className="input-wrapper">
					<input type="radio" />
					<label htmlFor="label">Label</label>
				</div>
			</div>
		</div>
	);
};

export default FilterDropdown;
