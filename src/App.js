import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderRes from './pages/component/layout/headerRes'
import HeaderTP from './pages/component/layout/HeaderTP'
import Home from './pages/component/home'
import Product from './pages/component/product'
import ProductDetails from './pages/component/productDetails'
import Cart from './pages/component/cart'

class App extends Component {
  render() {
    return (
      <div>
        <HeaderRes />
        <div className="page_top">
            <a href="/">
                <i className="fa fa-chevron-up scroll-icon"></i>
            </a> 
        </div>
         <div className="body-container">
          <HeaderTP />
          <Router>
            <Routes>
                <Route path = "/" exact element={<Home />}/>
                <Route path = "/product" element={<Product />} />
                <Route path = "/product-details" element={<ProductDetails />} />
                <Route path = "/cart" element={<Cart />} />
            </Routes>
          </Router>
        </div>
      </div>
    )
  }
}
export default App;
