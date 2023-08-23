import './Dialogs.scss';
import { MessageItem, DialogItem } from '../../components';

const Dialogs = (props) => {
	const { dialogs, messages, newMessageBody } = props.dialogsPage;
	let dialogElements = dialogs.map((item, i) => (
		<DialogItem name={item.name} key={i} pathId={item.pathId} />
	));

	let messageElements = messages.map((message, i) => (
		<MessageItem textMessage={message.textMessage} key={i} />
	));

	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
	};

	let onSendMessageClick = () => {
		props.sendMessage();
	};

	return (
		<div className="dialogs">
			<ul className="dialogs-menu">{dialogElements}</ul>
			<div className="messages">
				<div>{messageElements}</div>
				<div>
					<div>
						<textarea
							value={newMessageBody}
							onChange={onNewMessageChange}
							placeholder="Enter your message"
						/>
					</div>
					<div>
						<button onClick={onSendMessageClick}>Send</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
