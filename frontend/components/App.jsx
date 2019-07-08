import React from 'react'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

import {Route, Link, HashRouter, Switch} from 'react-router-dom'
import SplashContainer from './splash/splash_container'
import Splash from './splash/splash'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import NavBarContainer from './navbar_container'
import Home from './homefeed/homefeed'



const App = () => (
    <div>
        <header>
            <NavBarContainer />
            
            
        </header>

        <main className="maincontent">
            <Switch>
            <Route exactRoute path="/login" component={LogInFormContainer}/>
            <Route exactRoute path="/signup" component={SignUpFormContainer}/>
            <ProtectedRoute exactRoute path="/home" component={Home} />
            <Route path="/" component={SplashContainer}/>
            </Switch>
        </main>
        
    </div>
)

export default App;