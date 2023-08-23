import React from 'react';
import Post from './Post/Post';
import './Posts.scss';
import {
	RiEditBoxFill,
	RiImageFill,
	RiVidiconFill,
	RiMapPin2Fill,
} from 'react-icons/ri';

const Posts = (props) => {
	let postsElement = props.posts.map((post, i) => (
		<Post
			message={post.message}
			likesCount={post.likesCount}
			dislikesCount={post.dislikesCount}
			key={i}
		/>
	));

	let newPostElem = React.createRef();

	const onAddPost = (e) => {
		e.preventDefault();
		props.addPost();
	};

	const onPostChange = () => {
		let text = newPostElem.current.value;
		props.updateNewPostText(text);
	};

	return (
		<>
			<div className="posts">
				<form className="form">
					<textarea
						autocompletename="texts"
						className="form-contr"
						onChange={onPostChange}
						ref={newPostElem}
						value={props.newPostText}
						cols="10"
						rows="1"
						placeholder="Write what you wish"
					/>
				</form>
				<div className="button-wrapper">
					<div className="icons-container">
						<RiEditBoxFill className="profile-icon" />
						<RiImageFill className="profile-icon" />
						<RiVidiconFill className="profile-icon" />
						<RiMapPin2Fill className="profile-icon" />
					</div>
					<button type="submit" className="btn" onClick={onAddPost}>
						Publish
					</button>
				</div>
			</div>
			<div className="posts-container">{postsElement}</div>
		</>
	);
};

export default Posts;
