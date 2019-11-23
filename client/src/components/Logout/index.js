import React, { Component } from "react";
import API from '../../utils/API';
import './style.css';

class Logout extends Component {
  
  handleLogout = () => {
    API.logoutUser().then(res => {
        this.props.handleGlobalState("User", res.data);
    });
  };

  render() {
    return (
        <div className='logoutWrapper'>
          <div onClick={this.handleLogout} className='logoutButton btn btn-warning'>
              Sign out
          </div>
        </div>
    );
  }
  
}

export default Logout;
