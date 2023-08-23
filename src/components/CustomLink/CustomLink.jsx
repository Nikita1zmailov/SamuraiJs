import { Link } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
	// const match = useMatch(to);
	// console.log(match);
	return (
		<Link to={to} {...props}>
			{children}
		</Link>
	);
};

export default CustomLink;
