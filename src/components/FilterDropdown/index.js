import { useCallback, useState, useRef } from 'react';

import './index.scss';

const FilterDropdown = ({ className, title, items, inputType = 'checkbox', defaultIsOpen, clearable = false, attributes = false, setFilters }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState(null);
	const inputsWrapper = useRef(null);

	const toggleDropdown = useCallback(() => {
		setIsOpen(open => !open);
	}, [setIsOpen]);

	const handleChange = useCallback(
		event => {
			const name = event.target.name;
			const isChecked = event.target.checked;
			const value = event.target.dataset?.value;
			const label = event.target.nextSibling.innerText;
			const trait_type = event.target.dataset?.traitType;

			console.log({ name, label, value, trait_type });

			// NOTE: Check if attribute based filtering
			if (attributes) {
				if (isChecked) {
					setFilters?.(filters => ({ ...filters, attributes: [...filters.attributes, { trait_type, value: label }] }));
				} else {
					setFilters?.(filters => ({ ...filters, attributes: filters.attributes.filter(item => !(item.trait_type === trait_type && item.value === label)) }));
				}
				console.log(event.target);
			} else {
				if (clearable) {
					setSelectedValue({ [name]: value });
				}
				setFilters?.(filters => ({ ...filters, [name]: value }));
			}
		},
		[attributes, clearable, setFilters]
	);

	const handleClearSelection = () => {
		setSelectedValue(null);
		setFilters?.(filters => ({ ...filters, [Object.keys(selectedValue)[0]]: null }));
		// NOTE: Clear checked radio buttons
		if (inputsWrapper.current) {
			const inputs = inputsWrapper.current.querySelectorAll('input');
			inputs.forEach(input => (input.checked = false));
		}
	};

	// const handleClearSelection = () => {
	// 	setSelectedValue(null);
	// 	setFilters?.(filters => ({ ...filters, [Object.keys(selectedValue)[0]]: null }));
	// 	// NOTE: Clear checked radio buttons
	// 	if (inputsWrapper.current) {
	// 		const inputs = inputsWrapper.current.querySelectorAll('input');
	// 		inputs.forEach(input => (input.checked = false));
	// 	}
	// };

	return (
		<div className="filter-dd">
			<div>
				<button className={`filter-dd-title ${isOpen ? 'open' : null}`} onClick={toggleDropdown}>
					{title}
				</button>
				{clearable && Boolean(selectedValue) && (
					<button className="clear-selection" onClick={handleClearSelection}>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<line x1="18" y1="6" x2="6" y2="18" />
							<line x1="6" y1="6" x2="18" y2="18" />
						</svg>
					</button>
				)}
			</div>
			<div className={`filter-dd-content  ${isOpen ? 'open' : null} `}>
				{items.map(({ label, value, id, name }, index) => (
					<div className="input-wrapper" key={index}>
						<input
							type={inputType}
							name={name}
							id={id}
							data-trait-type={attributes ? value : null}
							data-value={attributes ? null : value}
							onChange={handleChange}
						/>
						<label htmlFor={id}>{label}</label>
					</div>
				))}
			</div>
		</div>
	);
};

export default FilterDropdown;

// className={`filter-dd-content  ${isOpen ? 'open' : null} `}
// className={`filter-dd-title ${isOpen ? 'open' : null}`}
