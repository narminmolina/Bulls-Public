import './index.scss';

const CollectionCard = ({ name, img_url, number }) => {
	return (
		<div className="collection-card">
			<span className="cube">
				<img src="../../../assets/img/tesseract.webp" alt="tesseract" />
			</span>
			<img src="https://launchpad.webisoft.org/media/minter/solana-bull-3d/V5BbCGK7KKH8oC6mA9EG3f8hH9fxXNRofLA2bNmM9Ss.jpg" alt={name} />
			<div className="collection-card-caption">
				<strong>
					#{number} <span>/1000</span>
				</strong>
				<em>Custom</em>
			</div>
		</div>
	);
};

export default CollectionCard;
