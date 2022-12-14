import { Helmet } from 'react-helmet-async';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

const app_title = 'The Bull Club';
const domain = 'https://bull.club';
const description = 'Interdimensional NFTs 🐂 ♣️';

export const Base = ({ children, title, isHeaderBlur }) => {
	const pageTitle = title ? `${app_title} | ${title}` : app_title;

	return (
		<>
			<Helmet>
				<title>{pageTitle}</title>
				{/* Facebook (Open Graph)  */}
				<meta property="og:type" content="website" />
				<meta property="og:title" content={pageTitle} />
				<meta property="og:site_name" content={pageTitle} />
				<meta property="og:description" content={description} />
				{/* Google  */}
				<meta itemProp="name" content={pageTitle} />
				{/* <meta itemProp="image" content={thumbnail} /> */}
				<meta itemProp="description" content={description} />
				{/* Twitter  */}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content={pageTitle} />
				{/* <meta name="twitter:image" content={thumbnail} /> */}
				<meta name="twitter:description" content={description} />
				{/* Add to homescreen for Chrome on Android */}
				<meta name="application-name" content={app_title} />
				<meta name="theme-color" content="#111" />
				<meta name="mobile-web-app-capable" content="yes" />
				{/* Add to homescreen for Safari on iOS */}
				<meta name="apple-mobile-web-app-title" content={app_title} />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
				{/* Microsoft Windows Tiles */}
				<meta name="msapplication-starturl" content={domain} />
				<meta name="msapplication-TileColor" content="#111" />
				<meta name="msapplication-tap-highlight" content="no" />
			</Helmet>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};
