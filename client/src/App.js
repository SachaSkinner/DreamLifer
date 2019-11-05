import React, { Component } from "react";
import CalendarView from './components/CalendarView';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';

class App extends Component {
  render() {
    return (

      <div>
        <CalendarView />
        <Signup />
        <Login />
        <Logout />
      </div>

    );
  }
}

export default App;