import './index.scss';

export const Button = ({ children, className }) => {
	return <button className={`button ${className ? className : null}`}>{children}</button>;
};
