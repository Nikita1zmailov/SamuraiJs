import CustomLink from '../CustomLink/CustomLink';
import './Header.scss';

const Header = (props) => {
	return (
		<header className="header">
			<div className="header--logo">
				<CustomLink to="/">Social</CustomLink>
			</div>
			<div className="header--login">
				{props.isAuth ? (
					<>
						<span>Hello</span>
						<CustomLink
							to="/login"
							className="login-form--login login-form"
						>
							{props.login}
						</CustomLink>
					</>
				) : (
					<>
						<CustomLink
							to="/registration"
							className="login-form--registration login-form"
						>
							Registration
						</CustomLink>
						<CustomLink
							to="/login"
							className="login-form--login login-form"
						>
							Login
						</CustomLink>
					</>
				)}
			</div>
		</header>
	);
};

export default Header;
