import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import { Checkout } from './pages/Checkout'
import { ProductDetails } from './pages/ProductDetails'
import './styles/global.css'
import './styles/navbar.css'
import './styles/hero.css'
import './styles/products-row.css'
import './styles/cart.css'
import './styles/footer.css'
import './styles/details-card.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
