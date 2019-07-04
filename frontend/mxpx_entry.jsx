import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import * as SessionAPIUtil from './util/session_api_util'


document.addEventListener("DOMContentLoaded", () => {
const root = document.getElementById('root')
const store = configureStore()
// window.login = SessionAPIUtil.login
// window.logout = SessionAPIUtil.logout
// window.signup = SessionAPIUtil.signup
window.getState = store.getState;
window.dispatch = store.dispatch

ReactDOM.render(<h1>React Is Working</h1>, root)
})