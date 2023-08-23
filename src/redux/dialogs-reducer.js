const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	dialogs: [
		{
			name: 'Dmitro',
			pathId: 1,
		},
		{
			name: 'Serhiy',
			pathId: 2,
		},
		{
			name: 'Oleksandr',
			pathId: 3,
		},
		{
			name: 'Svitlana',
			pathId: 4,
		},
		{
			name: 'Andriy',
			pathId: 5,
		},
	],
	messages: [
		{ textMessage: 'hi', id: 1 },
		{ textMessage: 'How are you?', id: 2 },
		{ textMessage: 'Hello my friend', id: 3 },
		{ textMessage: "wow bra it's cool", id: 4 },
	],
	newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			return {
				...state,
				newMessageBody: action.body,
			};

		case SEND_MESSAGE:
			let body = state.newMessageBody;
			if (body && body.trim() !== '') {
				return {
					...state,
					newMessageBody: '',
					messages: [...state.messages, { id: 6, textMessage: body }],
				};
			}
		// eslint-disable-next-line
		default:
			return state;
	}
};

export const updateNewMessageBodyCreator = (body) => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	body: body,
});

export const sendMessageCreator = () => ({
	type: SEND_MESSAGE,
});

export default dialogsReducer;
