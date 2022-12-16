import { Routes } from 'routes';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

export const App = () => (
	<BrowserRouter>
		<HelmetProvider>
			<Routes />
		</HelmetProvider>
	</BrowserRouter>
);
