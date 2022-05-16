import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderRes from './component/layout/headerRes'
import HeaderTP from './component/layout/HeaderTP'
import Home from './component/home'
import Product from './component/product'
// import ThankYou from './component/thankYou'

class Index extends Component {
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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}>
                <Route path="product" element={<Product />} />
                {/* <Route path="contact" element={<Contact />} /> */}
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    )
  }
}
export default Index;
