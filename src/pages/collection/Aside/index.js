import FilterDropdown from 'components/FilterDropdown';

import './index.scss';

const Aside = () => {
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
				<FilterDropdown />
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
