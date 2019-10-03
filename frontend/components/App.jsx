import React from "react";
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";

import { Route, Link, HashRouter, Switch } from "react-router-dom";

import Splash from "./splash/splash";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavBar from "./navbar";
import PostFormContainer from "./posts/post_form_container";
import HomeFeed from "./homefeed/homefeed";
import PostShowContainer from "./posts/post_show_container";
import Profile from "./profile/user_profile";
import PhotoManager from "./posts/photo_manager";
import GalleryShow from "./galleries/gallery_show";

const App = () => (
  <div>
    <header>
      <NavBar />
    </header>
    <div>
      <div className="maincontent">
        <PostFormContainer />
        <Switch>
          {/* <Route path="/posts/new" component={Form}/> */}
          <AuthRoute exactRoute path="/login" component={LogInFormContainer} />
          <AuthRoute
            exactRoute
            path="/signup"
            component={SignUpFormContainer}
          />
          <ProtectedRoute
            exactRoute
            path="/galleries/:galleryId"
            component={GalleryShow}
          />
          <ProtectedRoute
            exactRoute
            path="/posts/:postId"
            component={PostShowContainer}
          />
          <ProtectedRoute
            exactRoute
            path="/post/manager"
            component={PhotoManager}
          />
          <ProtectedRoute
            exactRoute
            path="/post/new"
            component={PostFormContainer}
          />
          <ProtectedRoute
            exactRoute
            path="/users/:userId"
            component={Profile}
          />
          <ProtectedRoute
            exactRoute
            path="/home/galleries"
            component={HomeFeed}
          />
          <ProtectedRoute exactRoute path="/home/photos" component={HomeFeed} />
          {/* <ProtectedRoute exactRoute path="/home" component={HomeFeed} /> */}
          <AuthRoute exactRoute="/" component={Splash} />
        </Switch>
      </div>
    </div>
  </div>
);

export default App;
