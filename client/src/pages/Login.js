import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import LoginForm from "../components/LoginForm";

class Login extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Jumbotron></Jumbotron>
          <Col size="md-12">
            <LoginForm handleGlobalState={this.props.handleGlobalState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
