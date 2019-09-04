import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../actions/session_actions";

import { openModal } from "../actions/ui_actions";

const NavBar = ({ currentUser, logout, openModal, props }) => {
  const sessionLinks = () => (
    <span className="login-buttons">
      <Link to="/login" id="login-btn">
        Login
      </Link>
      <Link to="/signup" className="login-buttons-btn">
        Sign Up
      </Link>
     
    </span>
  );
  const personalGreeting = () => (
    <span className="login-buttons">
      
      <Link to ='/post/manager'><button type="button" className="modal-button" onClick={openModal}>
        +
      </button></Link>

      <h3 className="header-name" >Hi, {currentUser.username}!</h3>
      {/* <h3 className="header-name" onClick={(e,currentUserId) => props.history.push(`/users/${currentUserId}`)}>Hi, {currentUser.username}!</h3> */}
      <button className="login-buttons-btn" onClick={logout}>
        Log Out
      </button>
    </span>
  );
  let loginButtons = currentUser ? personalGreeting() : sessionLinks();
    
  return (
    <div className={currentUser ? "nav-logged" : "nav-not-logged"}>
      <span className="logo">
        <h3 id="logo">
          <Link to="/" id="logo">
            MYpx
          </Link>
        </h3>
      </span>

      <span className="links">
        <ul>
          {/* <li>Discover</li> */}

          {/* <li>Search Box</li>
            <li>Search Box</li>
            <li>Search Box</li> */}
        </ul>
      </span>

      {loginButtons}
     
    </div>
  );
};




const mapStateToProps = ({ session, entities: { users } }) => {
  return { currentUser: users[session.id],
  currentUserId: session.id };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: () => dispatch(openModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);



