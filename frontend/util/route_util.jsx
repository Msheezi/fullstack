import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({component: Component, path, logged_in, exact}) => (
    <Route path={path} exact={exact} render={(props) => (
        !logged_in ? (<Component {...props} />) :    
        (<Redirect to="/" />)
    )} />
);


const Protected = ({component: Component, path, logged_in, exact}) => (
    <Route path={path} exact={exact} render={(props) => (
        logged_in ? (<Component {...props} />) : 
        (<Redirect to ="/login" />)
    )} />
)


const mapStateToProps = state => (
    {logged_in: Boolean(state.session.id)}
);

export const  AuthRoute = withRouter(connect(mapStateToProps)(Auth))
export const  ProtectedRoute = withRouter(connect(mapStateToProps)(Protected))