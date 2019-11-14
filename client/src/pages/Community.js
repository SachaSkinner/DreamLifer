import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
// import Logout from '../components/Logout'

function Community() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
        <div className="container">
          <Jumbotron>
            <h1>Welcome to our community!</h1>
          </Jumbotron>
        </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Community;