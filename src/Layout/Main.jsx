import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import LeftSideBar from '../Shired/LeftSideBar';
import RightSIdeBar from '../Shired/RightSIdeBar'
import NavBar from '../Component/NavBar'

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <Row>
          <Col lg={3} md={3}>
            <LeftSideBar></LeftSideBar>
          </Col>
          <Col  lg={7} md={7}>
            <Outlet></Outlet>
          </Col>
          <Col  lg={2} md={2}>
            <RightSIdeBar></RightSIdeBar>
          </Col>
        </Row>
      </Container>
      <h2 className="bg-black mt-5 text-white text-center p-3">Footer</h2>
    </div>
  );
};

export default Main;
