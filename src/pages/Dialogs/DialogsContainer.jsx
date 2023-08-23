import { connect } from 'react-redux';
import {
	sendMessageCreator,
	updateNewMessageBodyCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

// const DialogsContainer = () => {
// 	return (
// 		<ProviderTwo.Consumer>
// 			{(store) => {
// 				let onNewMessageChange = (body) => {
// 					store.dispatch(updateNewMessageBodyCreator(body));
// 				};

// 				let onSendMessageClick = () => {
// 					store.dispatch(sendMessageCreator());
// 				};
// 				return (
// 					<Dialogs
// 						updateNewMessageBody={onNewMessageChange}
// 						sendMessage={onSendMessageClick}
// 						dialogsPage={store.getState().dialogData}
// 					/>
// 				);
// 			}}
// 		</ProviderTwo.Consumer>
// 	);
// };

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogData,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageBody: (body) => {
			dispatch(updateNewMessageBodyCreator(body));
		},
		sendMessage: () => {
			dispatch(sendMessageCreator());
		},
	};
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
