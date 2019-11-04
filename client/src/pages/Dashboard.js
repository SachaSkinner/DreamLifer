import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function Dashboard() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>User's dashboard is here!!!</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;