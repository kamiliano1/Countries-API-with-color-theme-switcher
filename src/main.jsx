import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { CountryContextProvider } from './Context'
import {BrowserRouter as Router} from "react-router-dom"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountryContextProvider>
      <Router>
        <App />
      </Router>
    </CountryContextProvider>
  </React.StrictMode>,
)
