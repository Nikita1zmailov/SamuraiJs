import { Component } from 'react';
import Header from './Header';
import './Header.scss';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
// import { getAuth } from '../../api/api';
import { usersAPI } from '../../api/api';

class HeaderContainer extends Component {
	componentDidMount() {
		usersAPI.getAuth().then((data) => {
			if (data.resultCode === 0) {
				let { login, id, email } = data.data;
				this.props.setAuthUserData(id, email, login);
			}
			return data.data;
		});
	}
	render() {
		return <Header {...this.props} />;
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
