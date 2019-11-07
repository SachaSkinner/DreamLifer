import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SignupForm from '../components/SignupForm';

function Signup() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
          <SignupForm />
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
