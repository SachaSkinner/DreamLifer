import React from "react";
import "./style.css";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Home
      </a>
      <a className="navbar-brand" href="/dashboard">
        Dashboard
      </a>
      <a className="navbar-brand" href="/resourses">
        Sourses
      </a>
      <a className="navbar-brand" href="/community">
        Community
      </a>
      
    </nav>
  );
}

export default Nav;