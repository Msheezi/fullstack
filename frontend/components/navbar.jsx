import React from 'react'
import { Link } from 'react-router-dom'



const NavBar = () => (
<nav class="navbar">
    <h2>Mv<sup>PX</sup></h2>

    <ul >
        <li></li>
        <li>Discover(Feed PlaceHolder)</li>
        <li></li>
        <li>Search Box(PlaceHolder)</li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
    </ul>
</nav>
)

export default NavBar