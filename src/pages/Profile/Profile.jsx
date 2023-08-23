import ProfileInfo from './ProfileInfo/ProfileInfo';
import './Profile.scss';
import PostsContainer from './Posts/PostsContainer';

const Profile = (props) => {
	return (
		<main className="content">
			<ProfileInfo profile={props.profile} />
			<PostsContainer />
		</main>
	);
};

export default Profile;
