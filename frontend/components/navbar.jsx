import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from './posts/modal_form'



const NavBar = ({currentUser, logout}) => { 
    
    const sessionLinks = () => (
        <span className="login-buttons">
            <Link to="/login" id="login-btn" >Login</Link>
            <Link to="/signup" className="login-buttons-btn" >Sign Up</Link>
            {/* <button className="login-buttons-btn" onClick={() => this.props.history.push("/signin")}>Log in</button>
            <button className="login-buttons-btn" onClick={() => this.props.history.push("/signup")}>Sign Up</button> */}

        </span>
    );
    const personalGreeting = () => (
        <span className='login-buttons'>
            {/* <Link to="/post/new">Add A New Photo</Link> */}
            <Dashboard/>
            <h3 className="header-name">Hi, {currentUser.username}!</h3> 
            <button className="login-buttons-btn" onClick={logout}>Log Out</button>
        </span >
    )
    let loginButtons = currentUser ? personalGreeting() : sessionLinks();
        
     return (
<div className="navbar">
    <span className='logo'>   
        <h3 id="logo"><Link to="/" id="logo">MYpx</Link></h3>
    </span>

    <span className='links'>
        <ul >
            <li>Discover</li>
            
            
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