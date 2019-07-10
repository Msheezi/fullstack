import React from 'react'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

import {Route, Link, HashRouter, Switch} from 'react-router-dom'
import SplashContainer from './splash/splash_container'
import Splash from './splash/splash'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import NavBarContainer from './navbar_container'
import Home from './homefeed/homefeed'
import PostFormContainer from './posts/post_form_container'
import HomeFeedContainer from './homefeed/homefeed_container'



const App = () => (
    <div>
        <header>
            <NavBarContainer />
            
            
        </header>

        <div className="maincontent">
            
            <Switch>
            {/* <Route path="/posts/new" component={Form}/> */}
            <AuthRoute exactRoute path="/login" component={LogInFormContainer}/>
            <AuthRoute exactRoute path="/signup" component={SignUpFormContainer}/>
            <ProtectedRoute exactRoute path="/home" component={HomeFeedContainer} />
            <ProtectedRoute exactRoute path="/post/new" component={PostFormContainer}/>
            <AuthRoute exactRoute="/" component={SplashContainer}/>
            </Switch>
        </div>
        
    </div>
)

export default App;