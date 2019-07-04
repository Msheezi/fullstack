import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store/store'
import * as SessionUtil from './util/session_api_util'


document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore()
    
    window.getState = store.getState;
    window.dispatch = store.dispatch
    window.signup = SessionUtil.signup
    
    
    const root = document.getElementById('root')

ReactDOM.render(<Root store={store}/>, root)
})