import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from './utils/API';
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import Community from "./pages/Community";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Signup from './pages/Signup';
import Login from './pages/Login';

import logo from '../src/assets/images/logo.png';
import Header from '../src/component/Layout/Header';
import "./App.css";


class App extends React.Component {
  state = {
    User: {}
  

  }

  handleGlobalState = (state, value) => {
    this.setState({ [state]: value })
  }

  componentDidMount() {
    this.checkSession();
  };

  checkSession = () => {
    API.checkSession().then(res => {
    
        if (res.data.bool) {
            this.handleGlobalState("User", res.data)
           
        }
    }).catch(err => console.log(err));
  };

  render() {
    return (
      <Router>
        <div>
          <Nav />
          
          <div className="App">
            <div size="3" className="logo">
              <img src={logo} alt="logo" width="300" height="115" />
            </div>
            <div className="container">
              <Header className="app-moto" />
            </div> <br></br>
          </div>
          </div>
          <div>
          <Switch>
            <Route exact path="/" render={() => <Home User={this.state.User} />} />
            {this.state.User.id ?
            <Route exact path="/dashboard" render={() => (<Dashboard handleGlobalState={this.handleGlobalState} User={this.state.User} />)} /> :
            <Route exact path="/dashboard" render={() => (<Signup handleGlobalState={this.handleGlobalState} />)} /> 
            }
           
            <Route exact path="/community" component={Community} />
            {this.state.User.id ? 
            <Route exact path='/signup' render={() => (<Dashboard handleGlobalState={this.handleGlobalState} User={this.state.User} />)} /> :
            <Route exact path='/signup' render={() => (<Signup handleGlobalState={this.handleGlobalState} />)} /> 
            }
            {this.state.User.id ?
            <Route exact path='/login' render={() => (<Dashboard User={this.state.User} handleGlobalState={this.handleGlobalState} />)} /> :
            <Route exact path='/login' render={() => (<Login handleGlobalState={this.handleGlobalState} />)} /> 
            }
            <Route component={NoMatch} />
          </Switch>
          </div>
        </Router>
     
    )

  }

}
export default App;
// import React, { Component } from "react";
// import API from './utils/API';
// import Navigator from './Navigator';

// class App extends Component {
//   state = {
//     status: '',
//     currentUser: ''
//   };
//   checkSession = () => {
//     API.checkSession().then(res => {
//         this.setState({ status: res.data.bool, currentUser: res.data.firstName })
//     }).catch(err => console.log(err));
//   };
//   componentDidMount() {
//       this.checkSession();
//   };
//   componentDidUpdate(){
//     this.checkSession();
//   };


//   render() {
//     return (
//       <Navigator currentUser={this.state.currentUser} status={this.state.status} />
//     );
//   };
// };

// export default App;

