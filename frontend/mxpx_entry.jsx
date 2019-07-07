import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store/store'
import * as SessionUtil from './util/session_api_util'


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root')
    let store;
    if (window.currentUser){
        const preloadedState = {
            session: {id: window.currentUser.id},
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            }
        }

        store = configureStore(preloadedState)
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    window.getState = store.getState;
    window.dispatch = store.dispatch
    window.signup = SessionUtil.signup
    window.logout = SessionUtil.logout
    
    

ReactDOM.render(<Root store={store}/>, root)
})