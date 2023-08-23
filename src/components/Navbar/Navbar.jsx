import CustomLink from '../CustomLink/CustomLink';
import './Navbar.scss';

const Navbar = () => {
	return (
		<nav className="navigation">
			<ul className="navigation-menu">
				<li className="navigation-menu--item">
					<CustomLink className="navigation-menu--link" to="profile">
						Profile
					</CustomLink>
				</li>
				<li className="navigation-menu--item">
					<CustomLink className="navigation-menu--link" to="users">
						Users
					</CustomLink>
				</li>
				<li className="navigation-menu--item">
					<CustomLink className="navigation-menu--link" to="dialogs">
						Messages
					</CustomLink>
				</li>
				<li className="navigation-menu--item">
					<CustomLink className="navigation-menu--link" to="news">
						News
					</CustomLink>
				</li>
				<li className="navigation-menu--item">
					<CustomLink className="navigation-menu--link" to="settings">
						Settings
					</CustomLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
