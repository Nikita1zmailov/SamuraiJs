import { BiDislike, BiLike } from 'react-icons/bi';
import './Post.scss';
import { images } from '../../../../constants/images';

const { user_bg, user_avatar } = images;
// fix this
let date = new Date();

function formatDate(date) {
	let dayOfMonth = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();
	let hour = date.getHours();
	let minutes = date.getMinutes();
	let diffMs = new Date() - date;
	let diffSec = Math.round(diffMs / 1000);
	let diffMin = Math.round(diffSec / 60);
	let diffHour = Math.round(diffMin / 60);

	// форматирование
	year = year.toString().slice(-2);
	month = month < 10 ? '0' + month : month;
	dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
	hour = hour < 10 ? '0' + hour : hour;
	minutes = minutes < 10 ? '0' + minutes : minutes;

	if (diffSec < 1) {
		return 'прямо сейчас';
	} else if (diffMin < 1) {
		return `${diffSec} сек. назад`;
	} else if (diffHour < 1) {
		return `${diffMin} мин. назад`;
	} else {
		return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
	}
}
// fix this

const Post = ({ message, likesCount, dislikesCount }) => {
	return (
		<div className="post">
			<img src={user_bg} alt="user" className="post-img" />
			<div className="post-container">
				<div className="author-wrapper">
					<div className="author-wrapper--left">
						<img src={user_avatar} alt="author" className="author-img" />
						<div className="texts">
							<div className="author-name">
								<a href="#s" className="author-name--link">
									Alex Clark
								</a>
							</div>
							<div className="author-status">Following</div>
							<div className="post-published">
								Published a photo about {formatDate(date)}
							</div>
						</div>
					</div>
					<div className="author-icons">
						<div className="wrapper">
							<BiLike className="icon icons--wrapper-like" />
							<span className="icons--wrapper-counter like--count">
								{dislikesCount}
							</span>
						</div>
						<div className="wrapper">
							<BiDislike className="icon icons--wrapper-dislike" />
							<span className="icons--wrapper-counter dislike--count">
								{likesCount}
							</span>
						</div>
					</div>
				</div>
				<p className="post-text">{message}</p>
			</div>
		</div>
	);
};

export default Post;
