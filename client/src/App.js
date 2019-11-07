import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from "./pages/Dashboard";
import Resourses from "./pages/Resourses";
import Community from "./pages/Community";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Logout from './components/Logout';
import API from './utils/API';

class App extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    headerMessage: null,
    status: false
  };

  refreshState = () => {
    this.setState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        status: false
    });
  };

  componentDidMount() {
    this.checkSession();
  };

  checkSession = () => {
    API.checkSession().then(res => {
      this.setState({status: res.data.bool});
      console.log(this.state.status);
    }).catch(err => console.log(err));
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
        [name]: value
    });
  };
  handleSignup = event => {
    event.preventDefault();
    API.signupUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        phone: this.state.phone,
        password: this.state.password
    }).then(res => {
        this.setState({status: res.data[1], headerMessage: res.data[0]});
        this.refreshState();
        console.log(this.state);
    }).catch(err => console.log(err));
  };

  render () {
    return (
      <>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" render={()=> <Home status={this.state.status} />} />
            <Route exact path="/home" render={()=> <Home status={this.state.status} />} />
            <Route exact path ='/signup' render={()=> 
              <Signup status={this.state.status}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              email={this.state.email}
              phone={this.state.phone}
              password={this.state.password}
              headerMessage={this.state.headerMessage}
              handleInputChange={this.handleInputChange}
              handleSignup={this.handleSignup}
              />} 
             />
            <Route exact path ='/login' render={()=> <Login status={this.state.status} />} />
            <Route exact path="/dashboard" render={()=> <Dashboard status={this.state.status} />} />
            <Route exact path="/resourses" render={()=> <Resourses status={this.state.status} />} />
            <Route exact path="/community" render={()=> <Community status={this.state.status} />} />
            <Route component={NoMatch} />
          </Switch>
        </div>
        <div>
          <Logout />
        </div>

      </Router>
      </>
    );
  }
}

export default App;