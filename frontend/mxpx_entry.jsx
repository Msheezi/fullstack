import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from 'react-redux'


document.addEventListener("DOMContentLoaded", () => {
const root = document.getElementById('root')
const store = configureStore()
ReactDOM.render(<h1>React Is Working</h1>, root)
})