import React, { Component } from 'react'
import ProductPageleft from './product/productPageleft'
import ProductPageRight from './product/productPageRight';

class Product extends Component {
  render() {
    return (
      <section className="category-page-area pt-sm-5 pt-lg-0">
          <div className="container">
              <h1 className="section-header top-product-header text-center">Our Products</h1>
              <div className="category-page-inner">
                  <div className="row">
                      <ProductPageleft />
                      <ProductPageRight />
                  </div> 
              </div>
        </div>
      </section>
    )
  }
}
export default Product;
