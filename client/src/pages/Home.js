import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Signup from '../components/Signup';
import Login from '../components/Login';

class Home extends React.Component {
  render() {


    return (
      <Container fluid>

        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>This is our home!</h1>
              <Signup handleGlobalState={this.props.handleGlobalState}></Signup>
              <Login handleGlobalState={this.props.handleGlobalState}></Login>
            </Jumbotron>
          </Col>

        </Row>

      </Container>

    );

  }
}




export default Home;
