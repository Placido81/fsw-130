import React from "react"
import { Link } from "react-router-dom"
import  './navbar.css'

function Navbar (props) {
    return (
        <div>
        <div id="navBar">
        <div id="logo"><i class="fab fa"></i></div>
            <Link id="link" to="/">Home</Link>
            <Link id="link" to="/about">About</Link>
            <Link id="link" to="/gallery">Gallery</Link>
            <Link id="link" to="/contactus">Contact Us</Link>
        </div>
        <h2 id="navHeading">Street Art & Graffitti Art Co.</h2>🤖
        </div>
    )
}

export default Navbar