import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SignupForm from '../components/SignupForm';

class Signup extends Component {
  render() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
          </Jumbotron>
        </Col>
      </Row>
      <SignupForm handleGlobalState={this.props.handleGlobalState} />
    </Container>
  );
  }
};

export default Signup;
