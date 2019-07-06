import React from 'react'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import GreetingContainer from './greeting_container'
import {Route, Link, HashRouter} from 'react-router-dom'
import NavBar from './navbar'
import IndexContainer from './index/index_container'

const App = () => (
    <div>
        <header>
            <NavBar />
            
            

        </header>
        <main className="maincontent">
        <Route path="/" component={IndexContainer}/>
        <Route path="/login" component={LogInFormContainer}/>
        <Route path="/signup" component={SignUpFormContainer}/>
        </main>
        
    </div>
)

export default App;