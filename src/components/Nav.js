import React from "react";
import "../css/Nav.css";
import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top navBar">
      <NavLink exact to="/" className="navbar-brand  brand">
        MT
      </NavLink>
      <button
        className="navbar-toggler "
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span
          className="navbar-toggler-icon"
          style={{
            filter: "invert(1)",
          }}
        ></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink exact to="/home" className="nav-item nav-link active navItem">
            Home <span className="sr-only">(current)</span>
          </NavLink>
          <NavLink exact to="/about" className="nav-item nav-link navItem">
            About
          </NavLink>
          <NavLink exact to="/projects" className="nav-item nav-link navItem">
            Projects
          </NavLink>
          <NavLink exact to="/skills" className="nav-item nav-link navItem">
            Skills
          </NavLink>

          <NavLink exact to={"/contact"} className="nav-item nav-link navItem">
            Contact
          </NavLink>
          <a
            target="__blank"
            href={"https://github.com/marvinthompson-code"}
            className="nav-item nav-link navItem"
          >
            github
          </a>
          <a
            target="__blank"
            href={"https://www.linkedin.com/in/marvinjthompson/"}
            className="nav-item nav-link navItem"
          >
            linkedIn
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
