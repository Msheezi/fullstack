import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store/store'
import * as SessionUtil from './util/session_api_util'


document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser){
        const {currentUser} = window;
        const {id} = currentUser;
        const preloadedState = {
            session: {id},
            entities:{
                users: { 
                    [id]:currentUser} 
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
    
    

ReactDOM.render(<Root store={store}/>, root)
})