import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function Community() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Welcome to our community!</h1>
            <h2> Coming soon..</h2>
            <img src={require('../images/dreamlifer1.jpg')} />
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Community;