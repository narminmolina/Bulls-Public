import { Routes as AppRoutes, Route } from 'react-router-dom';

import Home from 'pages/home';
import Collection from 'pages/collection';
// import RecentSales from 'views/recent-sales';

export const Routes = () => (
	<AppRoutes>
		<Route exact path="/" element={<Home />} />
		<Route path="/collection" element={<Collection />} />
		{/* <Route path="/recent-sales" element={<RecentSales />} /> */}
	</AppRoutes>
);
