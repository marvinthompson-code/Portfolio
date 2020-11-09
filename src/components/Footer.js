import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Footer.css'

const Footer = () => {

    return (
        <footer className={"footer"}>
            <NavLink exact to={"/contact"}>Contact</NavLink>
            <a href={"https://github.com/marvinthompson-code"} className={"git"}>github</a>
            <a href={"https://www.linkedin.com/in/marvinjthompson/"} className={"linkedIn"}>linkedIn</a>
        </footer>
    )
}

export default Footer