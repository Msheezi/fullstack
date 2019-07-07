import React from 'react'
import { Link } from 'react-router-dom'



const NavBar = (props) => (
<div className="navbar">
    <span className='logo'>   
        <h3><Link to="/">My<sup>PX</sup></Link></h3>
    </span>
    <span className='links'>
        <ul >
            <li>Discover</li>
            
            <li>Search Box</li>
            <li>Search Box</li>
            {/* <li>Search Box</li>
            <li>Search Box</li>
            <li>Search Box</li> */}
        </ul>

    </span>
    <span className='login-buttons'>
       
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <button className="header-button" onClick={props.logoutUser}>Log Out</button>
       
    </span>
</div>
)

export default NavBar