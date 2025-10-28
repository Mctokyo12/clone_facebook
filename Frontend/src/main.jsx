import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/styles/icons.css'
import "boxicons/css/boxicons.min.css"
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router'
import { configureStore } from '@reduxjs/toolkit' 
import {Provider } from 'react-redux'
import rootReducer from './Reducers'
import { getPosts } from './actions/post.action.js'

const store = configureStore({
  reducer: rootReducer,
  devTools:true
})

store.dispatch(getPosts());


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>,
)
