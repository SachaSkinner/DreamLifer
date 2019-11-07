import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from '../utils/API';
import Jumbotron from "../components/Jumbotron";
import LoginForm from '../components/LoginForm';

class Login extends Component {
  state = {
    email: '',
    password: '',
    headerMessage: 'Log in here!',
    status: false,
  };

  componentDidMount() {
    this.checkSession();
  };
  checkSession = () => {
    API.checkSession().then(res => {
      this.setState({status: res.data.bool});
    }).catch(err => console.log(err));
  };
  refreshState = () => {
    this.setState({
      email: '',
      password: '',
      status: false
    });
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({ [name] : value });
  };

  handleLogin = event => {
    event.preventDefault();
    API.loginUser({
      email: this.state.email,
      password: this.state.password
    }).then(res => {
      this.refreshState();
      this.setState({status: res.data[1], headerMessage: res.data[0]});
    }).catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>{this.state.headerMessage}</h1>
              <LoginForm 
                email={this.state.email}
                password={this.state.password}
                handleInputChange={this.handleInputChange}
                handleLogin={this.handleLogin}
                headerMessage={this.state.headerMessage}
                status={this.state.status}
              />
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    )
  }
};

export default Login;