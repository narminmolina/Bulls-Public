import { Base } from 'Base';
import CollectionCard from './CollectionCard';

import Aside from './Aside';
import './index.scss';

const Collection = () => {
	return (
		<Base title="CollectionPage">
			<div className="container">
				<div className="collection-wrapper">
					<Aside />

					<div className="card-wrapper">
						<CollectionCard />
					</div>
				</div>
			</div>
		</Base>
	);
};

export default Collection;
