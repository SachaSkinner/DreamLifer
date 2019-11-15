import React, { Component } from "react";
import API from '../../utils/API';
import './style.css';

class Logout extends Component {
  state = {
    hi: 'hi'
  };

  handleLogout = () => {
    API.logoutUser().then(res => {
        this.props.handleGlobalState("User", res.data);
    });
  };

  render() {
    return (
        <div className='logoutWrapper'>
          <div onClick={this.handleLogout} className='logoutButton btn btn-danger'>
              Logout
          </div>
        </div>
    );
  }
  
}

export default Logout;
