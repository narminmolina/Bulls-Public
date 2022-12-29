import { Routes } from 'routes';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

export const App = () => (
	<BrowserRouter>
		<HelmetProvider>
			<QueryClientProvider client={queryClient}>
				<Routes />
			</QueryClientProvider>
		</HelmetProvider>
	</BrowserRouter>
);
