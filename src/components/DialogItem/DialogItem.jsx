import { NavLink } from 'react-router-dom';
import './DialogItem.scss';

const DialogItem = ({ name, pathId }) => {
	return (
		<li className="dialogs-item">
			<NavLink to={`/dialogs/${pathId}`}>{name}</NavLink>
		</li>
	);
};

export default DialogItem;
