import React, { Component } from "react";
import ShowDate from './components/ShowDate';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import Calendar from 'react-calendar';

class App extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (

      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
        <ShowDate testDate={this.state.date} />
        <Signup />
        <Login />
        <Logout />
      </div>

    );
  }
}

export default App;