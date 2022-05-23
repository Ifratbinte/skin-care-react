import React, { Component } from 'react'
import ProductSlider from '../slider/slick/productSlider'

class topLatest extends Component {
  render() {
    return (
        <section className="top-letest-product-section section-gap">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-xl-12 col-md-12 ">
                    <div className="section-title d-flex justify-content-between">
                        <h3>Latest Product</h3>
                        <a href="product.html" className="seemore-btn ">View More <i className="fa fa-sign-out"></i></a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="product-slider">
                        <ProductSlider />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
  }
}
export default topLatest;