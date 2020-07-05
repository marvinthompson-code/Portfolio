import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Footer.css'

const Footer = () => {

    return (
        <ul className={"footer"}>
            <NavLink exact to={"/contact"}>Contact</NavLink>
            <a href={"https://github.com/marvinthompson-code"} className={"git"}>github</a>
        </ul>
    )
}

export default Footer