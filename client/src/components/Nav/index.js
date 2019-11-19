import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";


function Nav() {
  const style = {
    padding: '5px',
    color: 'rgb(34, 110, 63)',
    backgroundColor: 'rgba(240, 192, 46, 0.989)',
    textAlign: 'center'

  }
 
  return (
    <nav  className="navbar  fixed-top navbar-expand-lg comeonnavbar-dark">
      <Link to='/' className="navbar-brand">
        <button style={style}>Home</button>
      </Link>
      <Link to='/dashboard' className="navbar-brand">
        <button style={style}>Dashboard</button>
      </Link>
      <Link to='/community' className="navbar-brand">
        <button style={style}>Resources</button>
      </Link>

    </nav>
  );
};

export default Nav;
