import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <LoginForm />
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;