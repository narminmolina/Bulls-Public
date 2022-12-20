const CollectionModal = ({name, number }) => {
	return (
		<div className="modal-body">
			<div className="modal-left">
				<div className="bull-profile">
					<em>CUSTOM</em>
					<h1>
						BULL <span>#{number}</span>
					</h1>
					<div className="image-wrapper">
						<div className="tesseract-box">
							<span className="teserract-icon"></span>
						</div>
						<img src="https://launchpad.webisoft.org/media/minter/solana-bull-3d/V5BbCGK7KKH8oC6mA9EG3f8hH9fxXNRofLA2bNmM9Ss.jpg" alt={name} />
					</div>
				</div>
				<div className="modal-right">
					<h2>Traits</h2>
					<ul className="traits"></ul>
				</div>
			</div>
			<div className="modal-footer">
				<h2>SECONDARY MARKETPLACES</h2>
				<div className="marketplace-wrapper">
					<div className="marketplace-box">
						<span className="logo magic-eden"></span>
						<button>View on Magic Eden</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CollectionModal;