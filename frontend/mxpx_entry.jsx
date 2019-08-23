import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store/store'
// import * as SizeUtil from './util/resize'




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
        
    // window.getState = store.getState;
    // window.dispatch = store.dispatch
    // window.signup = SessionUtil.signup
    // window.logout = SessionUtil.logout
    // window.store  = store
    // window.fetchAllPosts = Actions.fetchAllPosts
    // window.fetchPost = Actions.fetchPost
    // window.fetchComment = CommentUtil.fetchComment
    
    
    ReactDOM.render(<Root store={store}/>, root)
    })
    
    

