import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
// import Signup from '../components/Signup';
// import Login from '../components/Login';

// <<<<<<< HEAD
// class Home extends React.Component {
//   render() {


//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-12">
//             <Jumbotron>
//               <h1>This is our home!</h1>
//               <Signup handleGlobalState={this.props.handleGlobalState}></Signup>
//               <Login handleGlobalState={this.props.handleGlobalState}></Login>
//             </Jumbotron>
//           </Col>
// =======
//         <Row>
//           <Col size="md-12">
//             <Jumbotron>
//               <h1>This is our home!</h1>
//             </Jumbotron>
//               <Signup handleGlobalState={this.props.handleGlobalState}></Signup>
//               <Login handleGlobalState={this.props.handleGlobalState}></Login>
//           </Col>
// >>>>>>> nov7

//         </Row>

//       </Container>

//     );

//   }
// }
// =======
class Home extends Component {
  render() {
  return (
    <Container className="container">
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>This is our home!</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
  }
};
// >>>>>>> authFormatting




export default Home;
