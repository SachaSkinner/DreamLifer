import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Resourses from "./pages/Resourses";
import Community from "./pages/Community";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
// import API from "./utils/API";


class App extends React.Component {
  state = {
    User: {}
  }
  // changeUrl = (id, url) => {

  //   API.updateUrl(id, url).then(res => console.log(res))
  //     .catch(err => console.log(err));
  // }
  handleGlobalState = (state, value) => {
    this.setState({ [state]: value })
    console.log(this.state.User)
    // this.changeUrl(this.state.User.Id, this.state.User.Url)
  }

  render() {

    return (


      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <Home User={this.state.User} handleGlobalState={this.handleGlobalState} />} />
            <Route exact path="/dashboard" render={() => <Dashboard User={this.state.User} />} />
            <Route exact path="/resourses" component={Resourses} />
            <Route exact path="/community" component={Community} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>




    );
  }
}

export default App;