import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store/store'
import * as SessionUtil from './util/session_api_util'
// import * as APIUtil from './util/posts_api_util'
import * as Actions from './actions/posts_actions'
import * as CommentActions from './actions/comment_actions'
import * as CommentUtil from './util/comments_api_util'


document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser){
        const {currentUser} = window;
        const {id} = currentUser;
        const preloadedState = {
            session: {id},
            entities:{
                users: { 
                    [id]: currentUser} 
                }
            };
            
            store = configureStore(preloadedState);
            delete window.currentUser;
        } else {
            store = configureStore();
        }
        
        const root = document.getElementById('root')
    window.getState = store.getState;
    window.dispatch = store.dispatch
    window.signup = SessionUtil.signup
    window.logout = SessionUtil.logout
    window.store  = store
    window.fetchAllPosts = Actions.fetchAllPosts
    window.fetchPost = Actions.fetchPost
    window.fetchComment = CommentUtil.fetchComment
    
    

ReactDOM.render(<Root store={store}/>, root)
})