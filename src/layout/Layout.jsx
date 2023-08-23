import { Col, Container, Row } from 'react-bootstrap';

import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';
import { HeaderContainer } from '../components';

const Layout = () => {
	return (
		<>
			<HeaderContainer />
			<Container>
				<Row>
					<Col sm={2}>
						<Navbar />
					</Col>
					<Col sm={9}>
						<Outlet />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Layout;
