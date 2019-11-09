import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function Resources() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Cool resourses! Check it out!</h1>
            <img alt="" src={require('../helpers/back1.jpg')} />
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default Resources;