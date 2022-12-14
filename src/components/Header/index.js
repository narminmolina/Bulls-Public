import React from 'react'
import { Link } from 'react-router-dom';
import { Logo } from 'components/Logo';
import Select from 'react-select'
import './index.scss';

const navItems = [
	{ title: 'Home', link: '/' },
	{ title: 'Collection', link: '/collection' },
	{ title: 'Recent Sales', link: '/recent-sales' },
	{ title: 'Portal', link: '/the-bull-portal' },
	{ title: 'The Bull Club', link: '/the-bull-club' },
];

export const Header = () => {
	return (
		<header>
			Hello I'm header
			<div className="container">
				<div className="header-wrapper">
					<nav>
						<ul>
							{navItems.map(({ title, link }, index) => (
								<li key={index}>
									<Link to={title}> {title}</Link>
								</li>
							))}
						</ul>
					</nav>
          <Logo/>
<Select
placeholder="Marketplace"
/>
				</div>
			</div>
		</header>
	);
};
