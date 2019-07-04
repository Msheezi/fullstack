import React from 'react'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import GreetingContainer from './greeting_container'
import {Route, Link, HashRouter} from 'react-router-dom'
import NavBar from './navbar'

const App = () => (
    <div>
        <header>
            <NavBar />
            {/* <h1> MyPX</h1> */}
            {/* <GreetingContainer/> */}
            

        </header>
        <main class="maincontent">

        <Route path="/login" component={LogInFormContainer}/>
        <Route path="/signup" component={SignUpFormContainer}/>
        </main>
        
    </div>
)

export default App;