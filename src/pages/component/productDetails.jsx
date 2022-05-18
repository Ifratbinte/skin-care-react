import React, { Component } from 'react'
import ProductZoom from './productDetails/productZoom'
import ProductDetailsTab from './productDetails/productDetailsTab';
import ProductSlider from '../component/slider/slick/productSlick'

class ProductDetails extends Component {
  render() {
    return (
      <div>
        <ProductZoom />
        <ProductDetailsTab />
        <section class="related-product-section section-gap">
            <div class="container">
              <div class="row">
                  <div class="col-lg-12 col-xl-12 col-md-12 ">
                      <div class="section-title d-flex justify-content-between">
                          <h3>Related Product</h3>
                          <a href="/product" class="seemore-btn">View More <i class="fa fa-sign-out"></i></a>
                      </div>
                  </div>
              </div>
            </div>
        </section>
        <ProductSlider />
      </div>
    )
  }
}
export default ProductDetails;
