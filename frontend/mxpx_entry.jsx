import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from 'react-redux'
import * as SessionAPIUtil from './util/session_api_util'


document.addEventListener("DOMContentLoaded", () => {
const root = document.getElementById('root')
window.login = SessionAPIUtil.login
// window.logout = SessionAPIUtil.logout
// window.signup = SessionAPIUtil.signup


// const store = configureStore()
ReactDOM.render(<h1>React Is Working</h1>, root)
})