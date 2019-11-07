import React from "react";
import { Link } from 'react-router-dom';
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function Home(props) {
  console.log(props.status);
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>This is our home!</h1>
              {!props.status ? 
              <>
              <Link to='/signup'><button>signup</button></Link>
              <Link to='/login'><button>login</button></Link>
              </> 
              : null}
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  };

export default Home;
