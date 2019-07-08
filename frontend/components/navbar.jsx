import React from 'react'
import { Link } from 'react-router-dom'



const NavBar = ({currentUser, logout}) => { 
    
    const sessionLinks = () => (
        <span className="login-buttons">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>

        </span>
    );
    const personalGreeting = () => (
        <span className='login-buttons'>
            <h3 className="header-name">Hi, {currentUser.username}!</h3> 
            <button className="header-button" onClick={logout}>Log Out</button>
        </span >
    )
    let loginButtons = currentUser ? personalGreeting() : sessionLinks();
        
     return (
<div className="navbar">
    <span className='logo'>   
        <h3 id="logo"><Link to="/">My<sup>PX</sup></Link></h3>
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
    
       {loginButtons}
            {/* <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <button className="header-button" onClick={logout}>Log Out</button> */}
       
        
        

         
    
</div> )
}

export default NavBar