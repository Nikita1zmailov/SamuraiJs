const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
	posts: [
		{
			id: 1,
			message: 'Hi, how are you?',
			likesCount: 1,
			dislikesCount: 2,
		},
		{
			id: 2,
			message: "It's my first post",
			likesCount: 1,
			dislikesCount: 2,
		},
		{
			id: 3,
			message: 'lool',
			likesCount: 1,
			dislikesCount: 2,
		},
	],
	newPostText: '',
	profile: null,
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText,
			};
		case ADD_POST: {
			let newPost = {
				id: 4,
				message: state.newPostText,
				likesCount: 0,
				dislikesCount: 0,
			};
			if (state.newPostText && state.newPostText.trim() !== '') {
				return {
					...state,
					posts: [...state.posts, newPost],
					newPostText: '',
				};
			}
		}
		// eslint-disable-next-line
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			};
		// eslint-disable-next-line
		default:
			return state;
	}
};

export const addPostActionCreator = () => ({
	type: ADD_POST,
});

export const setUserProfile = (profile) => ({
	type: SET_USER_PROFILE,
	profile,
});

export const updatePostActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
});

export default profileReducer;
