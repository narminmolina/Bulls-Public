import './index.scss';

export const Button = ({ children, className, ...otherProps }) => {
	return (
		<button className={`button ${className ?? className}`} {...otherProps}>
			{children}
		</button>
	);
};
