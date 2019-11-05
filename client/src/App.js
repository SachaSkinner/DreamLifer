import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Resourses from "./pages/Resourses";
import Community from "./pages/Community";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import CalendarView from './components/CalendarView';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  return (

    <>

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

    <div>
      <CalendarView />
      <Signup />
      <Login />
      <Logout />
    </div>

    </>

  );
}

export default App;