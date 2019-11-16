import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
// import Carousal from "../components/Carousel"

class Home extends Component {
  render() {
  return (
    <Container className="container">
      <Row>
        <Col size="md-12">
          <Jumbotron> 
          {/* <Carousal/> */}
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
  }
};

export default Home;
