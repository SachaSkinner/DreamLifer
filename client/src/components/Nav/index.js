import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./style.css";
import API from "../../utils/API";


class Nav extends Component {
  state = {
    status: false
  }
  componentDidMount() {
    this.checkSession();
  };
  checkSession = () => {
    API.checkSession().then(res => {
      this.setState({status: res.data.bool});
    }).catch(err => console.log(err));
  };
  componentDidUpdate() {
    this.checkSession();
  }

  render() {
    if (this.state.status) {
      return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to='/' className="navbar-brand"> 
        Home
      </Link>
      <Link to='/dashboard' className="navbar-brand"> 
        Dashboard
      </Link>
      <Link to='/resourses' className="navbar-brand">
        Resourses
      </Link>
      <Link to='/community' className="navbar-brand">
        Community
      </Link>
      
      </nav>
      )
    } else {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to='/' className="navbar-brand"> 
          Home
        </Link>
        <Link to='/signup' className="navbar-brand"> 
          Signup
        </Link>
        <Link to='/login' className="navbar-brand"> 
          Login
        </Link>
        </nav>
        )
    }
  }
}

export default Nav;
