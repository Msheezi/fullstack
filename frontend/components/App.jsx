import React from 'react'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import GreetingContainer from './greeting_container'
import {Route, Link, HashRouter} from 'react-router-dom'

const App = () => (
    <div>
        <header>
            <h1> MyPX</h1>
            <GreetingContainer/>
        </header>
        
        <Route path="/login" component={LogInFormContainer}/>
        <Route path="/signup" component={SignUpFormContainer}/>
    </div>
)

export default App;