import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
// import demoLogin from '../../util/demologin'

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: 'Login',
    navLink: <Link to="/signup">Sign Up</Link>,
    inputClass:'signin-input',
    message: "Don't Have an Account?",
    formHeader: "Log In to MyPx"
    // demoaccount: demoLogin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
