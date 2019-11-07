import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Resourses from "./pages/Resourses";
import Community from "./pages/Community";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Logout from './components/Logout';
import API from './utils/API';

class App extends Component {
  state = {
    status: '',
    currentUser: ''
  };
  checkSession = () => {
    API.checkSession().then(res => {
        this.setState({ status: res.data.bool, currentUser: res.data.firstName })
    }).catch(err => console.log(err));
  };
  componentDidMount() {
      this.checkSession();
  };
  componentDidUpdate(){
    this.checkSession();
  }


  render() {
  return (

    <>
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          {this.state.status ?
          <Route exact path="/dashboard" render={(props) => (<Dashboard {...props} currentUser={this.state.currentUser} />)} /> :
          <Route exact path='/dashboard' component={Signup} />
          }
          <Route exact path="/resourses" component={Resourses} />
          <Route exact path="/community" component={Community} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
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