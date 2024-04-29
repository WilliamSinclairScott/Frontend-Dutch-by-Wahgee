import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import '@radix-ui/themes/styles.css'
// import './index.css'
import { Theme } from '@radix-ui/themes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Theme accentColor="grass" appearance="dark">
        <App />
      </Theme>
    </Router>
  </React.StrictMode>,
)