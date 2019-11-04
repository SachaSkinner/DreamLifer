import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Resourses from "./pages/Resourses";
import Community from "./pages/Community";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (

    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/resourses" component={Resourses} />
          <Route exact path="/community" component={Community} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
