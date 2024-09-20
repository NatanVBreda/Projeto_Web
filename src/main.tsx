import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/styles/index.css'
import Home from '../src/pages/home'
import Header from './pages/header'
import ProductCard from './pages/productCard'
import Reviwes from './pages/review'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Home />
    <ProductCard />
    <Reviwes />
  </React.StrictMode>
)