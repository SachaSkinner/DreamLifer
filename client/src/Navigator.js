import React from "react";
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

function Navigator(props) {
    return (
  
      <>
      <Router>
        <div>
          <Nav/>
          <Switch>
            <Route exact path="/" component={Home} />
            {!props.status ?
            <Route exact path='/dashboard' component={Signup} /> :
            <Route exact path="/dashboard" render={(routeProps) => (<Dashboard {...routeProps} currentUser={props.currentUser} />)} />
            }
            <Route exact path="/resourses" component={Resourses} />
            <Route exact path="/community" component={Community} />
            {!props.status ? 
            <Route exact path='/signup' component={Signup} /> :
            <Route exact path='/signup' render={(routeProps) => (<Dashboard {...routeProps} currentUser={props.currentUser} />)} />
            }
            {!props.status ?
            <Route exact path='/login' component={Login} /> :
            <Route exact path='/login' render={(routeProps) => (<Dashboard {...routeProps} currentUser={props.currentUser} />)} />
            }
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
export default Navigator;