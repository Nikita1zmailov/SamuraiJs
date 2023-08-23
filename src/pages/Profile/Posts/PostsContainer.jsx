import { connect } from 'react-redux';
import {
	addPostActionCreator,
	updatePostActionCreator,
} from '../../../redux/profile-reducer';
import Posts from './Posts';

// const PostsContainer = () => {
// 	return (
// 		<ProviderTwo.Consumer>
// 			{(store) => {
// 				let state = store.getState();

// 				const onAddPost = () => {
// 					store.dispatchИ(addPostActionCreator());
// 				};

// 				const onPostChange = (text) => {
// 					let action = updatePostActionCreator(text);
// 					store.dispatch(action);
// 				};
// 				return (
// 					<Posts
// 						updateNewPostText={onPostChange}
// 						addPost={onAddPost}
// 						posts={state.postsData.posts}
// 						newPostText={state.postsData.newPostText}
// 					/>
// 				);
// 			}}
// 		</ProviderTwo.Consumer>
// 	);
// };

let mapStateToProps = (state) => {
	return {
		posts: state.postsData.posts,
		newPostText: state.postsData.newPostText,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (text) => dispatch(updatePostActionCreator(text)),
		addPost: () => dispatch(addPostActionCreator()),
	};
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
