import blackBull from 'assets/img/bulls/black-bull.jpg';

import './index.scss';

const CollectionCard = ({ name, img_url, number, has_cube = false, ...otherProps }) => {
	const handleClick = () => {};
	return (
		<button onClick={handleClick} className="collection-card">
			{has_cube && (
				<div className="tesseract-box">
					<span className="teserract-icon"></span>
				</div>
			)}
			<img src={img_url ?? blackBull} alt={name} />
			<div className="collection-card-caption">
				<strong>
					#{number} <span>/1000</span>
				</strong>
				<em>Custom</em>
			</div>
		</button>
	);
};

export default CollectionCard;
