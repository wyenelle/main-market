import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'

import { Market_Context_Provider } from './context/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Market_Context_Provider>
        <App />
      </Market_Context_Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
