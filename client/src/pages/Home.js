import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

class Home extends Component {
  render() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
        <div className="container">
          <Jumbotron>
            <h1>This is our home!</h1>
          </Jumbotron>
          </div>
        </Col>
      </Row>
    </Container>
  );
  }
};




export default Home;
