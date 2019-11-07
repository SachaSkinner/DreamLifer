import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SignupForm from '../components/SignupForm';

function Signup(props) {
      return (
        <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>{props.headerMessage ? props.headerMessage : 'Sign up Below!'}</h1>
              <SignupForm 
              firstName={props.firstName}
              lastName={props.lastName}
              email={props.email}
              phone={props.phone}
              password={props.password}
              handleInputChange={props.handleInputChange}
              handleSignup={props.handleSignup}
              headerMessage={props.headerMessage}
              status={props.status}
              />
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      )
}

export default Signup;