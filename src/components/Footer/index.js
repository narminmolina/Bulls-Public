import { Logo } from 'components/Logo';
import { Link } from 'react-router-dom';
import './index.scss';


const socialMedias = [
	{ title: 'Telegram', link: 'https://t.me/thebullclub' },
	{ title: 'Twitter', link: 'https://twitter.com/TheBullClubNFT' },
	{ title: 'Discord', link: 'https://discord.com/invite/thebullclub' },
	{ title: 'Instagram', link: 'https://www.instagram.com/thebullclubnft/' },
];

export const Footer = () => {
	return (
		<footer>
			<div className="container extended">
				<div className="footer-wrapper">
					<nav>
						<ul>
							{socialMedias.map(({ title, link }, index) => (
								<li key={index}>
									<a href={link} title={title} target="_blank" rel="noopener noreferrer">
										{title}
									</a>
								</li>
							))}
						</ul>
					</nav>
					<Logo />
				</div>
			</div>
		</footer>
	);
};
