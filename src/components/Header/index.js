import { Link } from 'react-router-dom';
import { Logo } from 'components/Logo';
import { Button } from 'components/Button';
import DropdownButton from '../Dropdown/index';

import './index.scss';

const navItems = [
	{ title: 'Home', link: '/' },
	{ title: 'Collection', link: '/collection' },
	{ title: 'Recent Sales', link: '/recent-sales' },
	{ title: 'The Bull Club', link: '/the-bull-club' },
];

export const Header = () => {
	return (
		<header>
			<div className="container extended">
				<div className="header-wrapper">
					<nav>
						<ul>
							{navItems.map(({ title, link }, index) => (
								<li key={index}>
									<Link className="link" to={link}>
										{title}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<Logo />
					<div className="select-wrapper">
						<DropdownButton />
						<Button>Select Wallet</Button>
					</div>
				</div>
			</div>
		</header>
	);
};
