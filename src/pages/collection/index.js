import { Base } from 'Base';

const Collection = () => {
	return (
		<Base title="CollectionPage">
			<div className="container">
				<div className="collection">
					<aside>
						<h1>Collection</h1>
						<p>Search the entire Bull Club Collections. Or connect your wallet and view your own collection</p>
						<div className="tab-buttons">
							<button>Main</button>
							<button>Owned</button>
						</div>
					</aside>
					<div className="card-wrapper">
						<card></card>
					</div>
				</div>
			</div>
		</Base>
	);
};

export default Collection;
