import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../actions/session_actions";

import { openModal } from "../actions/ui_actions";

const NavBar = ({ currentUser, logout, openModal }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  // document.body.addEventListener("click", () => {
  //   if (popupOpen) {
  //     setPopupOpen(false);
  //   }
  // });  need to figure out a way to handle the click outside of the popup
  //so that it closes  the below is the use case for hooks to add stateful
  //properties to a functional component
  const togglePopup = e => {
    e.stopPropagation();
    setPopupOpen(!popupOpen);
  };

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
      <Link to="/post/manager">
        <button type="button" className="modal-button" onClick={openModal}>
          +
        </button>
      </Link>

      {/* <Link to="/post/manager"> */}
      <h3 className="header-name" onClick={togglePopup}>
        Hi, {currentUser.first_name}!
      </h3>
      {/* </Link> */}
      <div id="dropdown">
        {/* <button onClick={togglePopup}>open</button> */}
        <ul onClick={togglePopup} className="nav-list-ul">
          {popupOpen ? (
            <div>
              <li>
                <Link to="/post/manager">Manage Photos</Link>
              </li>
              <li>
                <Link to={`/users/${currentUser.id}`}> View Profile </Link>
              </li>
            </div>
          ) : (
            ""
          )}
        </ul>
      </div>
      {/* <h3 className="header-name" onClick={(e,currentUserId) => props.history.push(`/users/${currentUserId}`)}>Hi, {currentUser.username}!</h3> */}
      <button className="login-buttons-btn" onClick={logout}>
        Log Out
      </button>
    </span>
  );

  let loginButtons = currentUser ? personalGreeting() : sessionLinks();
  // let galnav = match.params ? (
  //   ""
  // ) : (
  //   <Link to="/home/galleries"> back to Galleries</Link>
  // );
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
        {/* {galnav} */}

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
  return { currentUser: users[session.id], currentUserId: session.id };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: () => dispatch(openModal())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar)
);
