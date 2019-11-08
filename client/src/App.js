import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Resourses from "./pages/Resourses";
import Community from "./pages/Community";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
//~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^~^
import Logout from '../src/components/Logout';
import logo from "./assets/images/logo.png";
import Header from "./component/Layout/Header";
import "./App.css";



class App extends React.Component {
  state = {
    User: {},
  };
  // changeUrl = (id, url) => {

  //   API.updateUrl(id, url).then(res => console.log(res))
  //     .catch(err => console.log(err));
  // }
  handleGlobalState = (state, value) => {
    this.setState({ [state]: value })
    console.log(this.state.User)
    // this.changeUrl(this.state.User.Id, this.state.User.Url)
  };


  render() {
    return (
      <React.Fragment>
        <Router>
          <Nav />
          <Logout />
          <div className="App">
            <div size="3" className="logo">
              <img src={logo} alt="logo" width="300" height="115" />
            </div>
            <div className="container">
              <Header className="app-moto" />
              <br></br>
              {/* <Route exact path="/mylist" component={MyList} /> */}
            </div>
          </div>
          <div>
          <Switch>
            <Route exact path="/" render={() => <Home User={this.state.User} handleGlobalState={this.handleGlobalState} />} />
            <Route exact path="/dashboard" render={() => <Dashboard User={this.state.User} />} />
            <Route exact path="/resourses" component={Resourses} />
            <Route exact path="/community" component={Community} />
            <Route component={NoMatch} />
          </Switch>
          </div>
        </Router>
      </React.Fragment>
    );


  }

}

export default App;
