import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from 'components/Logo';
import { Button } from 'components/Button';

import './index.scss';

const navItems = [
	{ title: 'Home', link: '/' },
	{ title: 'Collection', link: '/collection' },
	{ title: 'Recent Sales', link: '/recent-sales' },
	{ title: 'The Bull Club', link: '/the-bull-club' },
];

const marketplaces = [
	{ label: 'MAGIC EDEN', value: 'magicEden', to: 'https://magiceden.io/marketplace/the_bull_club' },
	{ label: 'OPENSEA', value: 'opensea', to: 'https://opensea.io/collection/the-bull-club-og' },
];

const DropdownButton = () => {
	const [open, setOpen] = useState(false);
	const toggleDropdown = () => {
		setOpen(!open);
	};
	// const handleRedirect = useCallback(option => {
	// 	if (option.value === 'magicEden') {
	// 		window.location.replace('https://magiceden.io/marketplace/the_bull_club');
	// 	} else if (option.value === 'opensea') {
	// 		window.location.replace('https://opensea.io/collection/the-bull-club-og');
	// 	} else {
	// 		return;
	// 	}
	// }, []);

	return (
		<div className="dd-wrapper">
			<button className="button" onClick={toggleDropdown}>
				<p>MarketPlaces</p>
				{open ? (
					<svg style={{ transform: `rotate(180deg)` }} height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg">
						<path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
					</svg>
				) : (
					<svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg">
						<path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
					</svg>
				)}
			</button>
			{open ? (
				<ul className="dd-menu">
					{marketplaces.map(({ label, value, to }, index) => (
						<li key={index}>
							<a className="link " href={to}>
								{label}
							</a>
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
};

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
										{' '}
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
