import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import { Theme } from '@radix-ui/themes'

import '@radix-ui/themes/styles.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Theme accentColor='cyan' appearance='dark' className='background'>
        <App />
      </Theme>
      {/* <Theme className='dark-theme background'>
        <App />
      </Theme> */}
    </Router>
  </React.StrictMode>,
)