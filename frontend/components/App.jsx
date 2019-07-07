import React from 'react'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import GreetingContainer from './greeting_container'
import {Route, Link, HashRouter} from 'react-router-dom'
import NavBar from './navbar'
import SplashContainer from './splash/splash_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'

const App = () => (
    <div>
        <header>
            <NavBar />
            
        </header>

        <main className="maincontent">
            {/* <Route exact path="/" component={SplashContainer}/> */}
            {/* <AuthRoute exactRoute path="/home" component={HomeContainer} /> */}
            <AuthRoute exactRoute path="/login" component={LogInFormContainer}/>
            <AuthRoute exactRoute path="/signup" component={SignUpFormContainer}/>
        </main>
        
    </div>
)

export default App;