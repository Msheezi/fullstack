import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearSessionErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'SignUp',
    navLink:  <Link to="/login"> Log In</Link>,
    inputClass: 'login-input',
    message: "Already Have an Account?",
    formHeader: "Join MyPx",
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearSessionErrors()),
    processFormDemo: (user) => dispatch(login(user))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
