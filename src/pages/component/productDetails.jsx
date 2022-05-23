import React, { Component } from 'react'
import ProductZoom from './productDetails/productZoom'
import ProductDetailsTab from './productDetails/DetailsTab';
// import ProductSlider from '../component/slider/slick/productSlick'
import ProductSlider from '../component/slider/slick/productSlider'

class ProductDetails extends Component {
  render() {
    return (
      <div>
        <ProductZoom />
        <ProductDetailsTab />
        <section class="related-product-section section-gap">
            <div class="container">
              <div class="section-title d-flex justify-content-between">
                  <h3>Related Product</h3>
                  <a href="/product" class="seemore-btn">View More <i class="fa fa-sign-out"></i></a>
              </div>
              <div className="section-slide">
                <ProductSlider />
              </div>
            </div>
        </section>
        
      </div>
    )
  }
}
export default ProductDetails;
