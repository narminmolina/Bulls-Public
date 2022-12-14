import { Link } from 'react-router-dom';

import logo from 'assets/img/the-bull-club/logo.svg';
import './index.scss';

export const Logo = () => (
	<Link className="logo" to="/" title="Link to home page">
		<img src={logo} alt="Bull club logo" />
	</Link>
);
