import { Routes } from 'routes';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<HelmetProvider>
				<Routes />
			</HelmetProvider>
		</BrowserRouter>
	);
}

export default App;
