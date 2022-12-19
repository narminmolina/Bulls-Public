import { useCallback, useState } from 'react';

import './index.scss';

const FilterDropdown = ({ title, items, inputType = 'checkbox' }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = useCallback(() => {
		setIsOpen(open => !open);
	}, [setIsOpen]);

	return (
		<div className="filter-dd">
			<button className={`filter-dd-title ${isOpen ? 'open' : null}`} onClick={toggleDropdown}>
				{title}
			</button>

			<div className={`filter-dd-content  ${isOpen ? 'open' : null} `}>
				{items.map(({ label, value, id, name }, index) => (
					<div className="input-wrapper" key={index}>
						<input
							type={inputType}
							name={name}
							id={id}
						/>
						<label htmlFor={id}>{label}</label>
					</div>
				))}
			</div>
		</div>
	);
};

export default FilterDropdown;
