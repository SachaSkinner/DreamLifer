import React, { Component } from "react";
import API from './utils/API';
import Navigator from './Navigator';

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
  };


  render() {
    return (
      <Navigator currentUser={this.state.currentUser} status={this.state.status} />
    );
  };
};

export default App;