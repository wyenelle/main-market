import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'

import { Market_Context_Provider } from './context/auth-context.jsx'
import { Product_Context_Provider } from './context/product-context.jsx'
import { Cart_Context_Provider } from './context/cart-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Market_Context_Provider>
        <Product_Context_Provider>
          <Cart_Context_Provider>
            <App />
          </Cart_Context_Provider>
        </Product_Context_Provider>
      </Market_Context_Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
