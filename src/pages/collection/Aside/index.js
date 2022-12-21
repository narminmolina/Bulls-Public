import './index.scss';

const Aside = ({ title, description, children }) => {
	return (
		<aside className="aside">
			<h1 className="section-title">{title}</h1>
			<p className="section-description">{description}</p>
			{children}
		</aside>
	);
};

export default Aside;
