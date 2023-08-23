// import axios from 'axios';
// import { images } from '../../constants/images';
// import CustomLink from '../../components/CustomLink/CustomLink';

// import './Users.scss';

// const { user_bg, user_avatar } = images;

// const Users = (props) => {
// 	const getUsers = () => {
// 		if (props.users.length === 0) {
// 			axios
// 				.get('https://social-network.samuraijs.com/api/1.0/users')
// 				.then((response) => {
// 					props.setUsers(response.data.items);
// 				});
// 		}
// 	};

// 	return (
// 		<div className="users-container">
// 			{props.users.map((user) => {
// 				return (
// 					<div className="user-container" key={user.id}>
// 						<div className="img-wrapper">
// 							<img
// 								className="user-bg"
// 								src={!user.photos.large ? user_bg : user.photos.large}
// 								alt="user"
// 							/>
// 							<img
// 								className="user-img"
// 								src={
// 									!user.photos.small ? user_avatar : user.photos.small
// 								}
// 								alt="user"
// 							/>
// 						</div>
// 						<div className="user-info">
// 							<div className="user-info--container">
// 								<span className="user-name">
// 									<CustomLink href="">{user.name}</CustomLink>
// 								</span>
// 								<span className="user-descr">
// 									{!user.status ? 'Student' : ''}
// 								</span>
// 								<span className="user-location">
// 									<a href="#!">
// 										{!user.location ? 'Kiyv, Ukraine' : ''}
// 									</a>
// 								</span>
// 							</div>
// 							{user.followed ? (
// 								<button
// 									onClick={() => {
// 										props.unfollow(user.id);
// 									}}
// 									className="follow-btn"
// 								>
// 									Follow
// 								</button>
// 							) : (
// 								<button
// 									onClick={() => props.follow(user.id)}
// 									className="follow-btn"
// 								>
// 									Unfollow
// 								</button>
// 							)}
// 						</div>
// 					</div>
// 				);
// 			})}
// 		</div>
// 	);
// };

// export default Users;

import CustomLink from '../../components/CustomLink/CustomLink';
import Preloader from '../../components/Preloader/Preloader';
import { images } from '../../constants/images';

import './Users.scss';
import { usersAPI } from '../../api/api';

const { user_bg, user_avatar } = images;

const Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	let pages = [];
	for (let i = 1; i < pagesCount; i++) {
		pages.push(i);
	}

	return (
		<div className="users-container">
			<div className="users-navigation">
				{props.isFetching ? <Preloader /> : null}
				{!props.isFetching &&
					pages.map((page, i) => (
						<span
							onClick={() => {
								props.onPageChanged(page);
							}}
							key={i}
							className={
								props.currentPage === page ? 'selectedPage' : ''
							}
						>
							{page}
						</span>
					))}
			</div>
			{props.users.map((user) => {
				return (
					<div className="user-container" key={user.id}>
						<div className="img-wrapper">
							<img
								className="user-bg"
								src={!user.photos.large ? user_bg : user.photos.large}
								alt="user"
							/>
							<CustomLink to={'/profile/' + user.id}>
								<img
									className="user-img"
									src={
										!user.photos.small
											? user_avatar
											: user.photos.small
									}
									alt="user"
								/>
							</CustomLink>
						</div>
						<div className="user-info">
							<div className="user-info--container">
								<span className="user-name">
									<CustomLink href="">{user.name}</CustomLink>
								</span>
								<span className="user-descr">
									{!user.status ? 'Student' : ''}
								</span>
								<span className="user-location">
									<a href="#!">
										{!user.location ? 'Kiyv, Ukraine' : ''}
									</a>
								</span>
							</div>
							{user.followed ? (
								<button
									disabled={props.followingInProgress.some(
										(id) => id === user.id
									)}
									onClick={() => {
										props.toggleFollowingProgress(true, user.id);
										usersAPI.getUnfollow(user.id).then((data) => {
											if (data.resultCode === 0) {
												props.unfollow(user.id);
											}
											props.toggleFollowingProgress(false, user.id);
										});
									}}
									className="follow-btn"
								>
									Unfollow
								</button>
							) : (
								<button
									disabled={props.followingInProgress.some(
										(id) => id === user.id
									)}
									onClick={() => {
										props.toggleFollowingProgress(true, user.id);
										usersAPI.getFollow(user.id).then((data) => {
											if (data.resultCode === 0) {
												props.follow(user.id);
											}
											props.toggleFollowingProgress(false, user.id);
										});
									}}
									className="follow-btn"
								>
									Follow
								</button>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Users;
