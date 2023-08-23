// import profileReducer from './profile-reducer';
// import dialogsReducer from './dialogs-reducer';
// import sidebarReducer from './sidebar-reducer';

// let store = {
// 	_state: {
// 		dialogData: {
// 			dialogs: [
// 				{
// 					name: 'Dmitro',
// 					pathId: 1,
// 				},
// 				{
// 					name: 'Serhiy',
// 					pathId: 2,
// 				},
// 				{
// 					name: 'Oleksandr',
// 					pathId: 3,
// 				},
// 				{
// 					name: 'Svitlana',
// 					pathId: 4,
// 				},
// 				{
// 					name: 'Andriy',
// 					pathId: 5,
// 				},
// 			],
// 			messages: [
// 				{ textMessage: 'hi', id: 1 },
// 				{ textMessage: 'How are you?', id: 2 },
// 				{ textMessage: 'Hello my friend', id: 3 },
// 				{ textMessage: "wow bra it's cool", id: 4 },
// 			],
// 			newMessageBody: '',
// 		},
// 		postsData: {
// 			posts: [
// 				{
// 					id: 1,
// 					message: 'Hi, how are you?',
// 					likesCount: 1,
// 					dislikesCount: 2,
// 				},
// 				{
// 					id: 2,
// 					message: "It's my first post",
// 					likesCount: 1,
// 					dislikesCount: 2,
// 				},
// 				{
// 					id: 3,
// 					message: 'lool',
// 					likesCount: 1,
// 					dislikesCount: 2,
// 				},
// 			],
// 			newPostText: '',
// 		},
// 		sidebarData: {},
// 	},
// 	getState() {
// 		return this._state;
// 	},
// 	rerenderEntireTree() {
// 		console.log('state was changed');
// 	},
// 	subscribe(observer) {
// 		this.rerenderEntireTree = observer;
// 	},
// 	dispatch(action) {
// 		this._state.postsData = profileReducer(this._state.postsData, action);
// 		this._state.dialogData = dialogsReducer(this._state.dialogData, action);
// 		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

// 		this.rerenderEntireTree();
// this.subscribe(this.getState());
// 	},
// };

// export default store;
