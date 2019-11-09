import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <Link to='/' className="navbar-brand">
        Home
      </Link>
      <Link to='/dashboard' className="navbar-brand">
        Dashboard
      </Link>
      <Link to='/resourses' className="navbar-brand">
        Sources
      </Link>
      <Link to='/community' className="navbar-brand">
        Community
      </Link>
      
    </nav>
  );
};

export default Nav;
