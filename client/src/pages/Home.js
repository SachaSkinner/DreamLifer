import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Header from '../component/Layout/Header';
import Carousal from "../components/Carousel"

class Home extends Component {
  render() {
    const together = {
      padding: '0'
    }
   
    return (
      <Container className="container">
        <Row>
          <Col size="md-12">
            <div style={together} className="container">
              <Header  className="app-moto" />
              <br></br>
              <Carousal/>           
            </div> <br></br>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Home;
