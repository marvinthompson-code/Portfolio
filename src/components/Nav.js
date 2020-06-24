import React from 'react';
import { NavLink } from 'react-router-dom'
import '../css/Nav.css'

const Nav = () => {

    return (
        <nav>
            <NavLink exact to={"/"} activeClassName={"navItem"}>Home</NavLink>
            <NavLink exact to={"/about"} activeClassName={"navItem"}>About</NavLink>
            <NavLink exact to={"/projects"} activeClassName={"navItem"}>Projects</NavLink>
        </nav>
    )
}

export default Nav;