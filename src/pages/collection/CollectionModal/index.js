import blackBull from 'assets/img/bulls/black-bull.jpg';

import './index.scss';

const CollectionModal = ({ name, number, has_cube, img_url, color }) => {
	return (
		<div className="modal">
			<button className="modal-close-x">
				<svg className="modal-close-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="20" height="20">
					<path
						fill="#717375"
						d="M11.04 12.14 8.5 9.6l-2.54 2.54c-.15.15-.35.23-.55.23s-.4-.08-.55-.23c-.3-.3-.3-.79 0-1.09L7.4 8.51 4.86 5.97c-.3-.3-.3-.79 0-1.09.3-.3.79-.3 1.09 0l2.54 2.54 2.54-2.54c.3-.3.79-.3 1.09 0 .3.3.3.79 0 1.09L9.58 8.51l2.54 2.54a.773.773 0 0 1-.55 1.32c-.2 0-.4-.08-.55-.23ZM1.55 8.5c0 3.83 3.12 6.95 6.95 6.95s6.95-3.12 6.95-6.95-3.12-6.95-6.95-6.95S1.55 4.67 1.55 8.5Zm3.65 7.83a8.518 8.518 0 0 1-4.52-4.52C.24 10.76.01 9.65.01 8.5s.22-2.26.67-3.31A8.518 8.518 0 0 1 5.2.67a8.512 8.512 0 0 1 6.62 0 8.518 8.518 0 0 1 4.52 4.52c.44 1.05.67 2.16.67 3.31s-.22 2.26-.67 3.31a8.518 8.518 0 0 1-4.52 4.52 8.512 8.512 0 0 1-6.62 0Z"
					></path>
				</svg>
			</button>
			<div className="modal-bull-container">
				<div className="modal-left">
					<em>Custom</em>
					<strong>Bull #{number}</strong>
					{has_cube && (
						<div className="tesseract-box">
							<span className="teserract-icon"></span>
						</div>
					)}
					<img src={img_url ?? blackBull} alt={name} />
				</div>
				<div className="modal-right">
					<h2>Traits</h2>
					<ul className="traits">
						<li className="trait">
							<strong>Background</strong>
							<span>{color} Color</span>
							<em>number%</em>
						</li>
					</ul>
				</div>
			</div>
			<div className="modal-footer">
				<h1>Secondary Market Places</h1>
				<ul className="market-places">
					<li className=" market-place-card">
						<a href="kfh" target="_blank">
							<img src="" alt="logo"></img>
							<span> View on Magis Eden</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default CollectionModal;
