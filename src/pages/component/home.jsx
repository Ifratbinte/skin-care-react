import React, { Component } from 'react'
import HeroSection from './slider/heroCarousel';
import Category from './category/category'
// import TopLatest from './product/topLatest'

class Home extends Component {
  render() {
    return (
      <div>
        <HeroSection />
        <Category />
        {/* <TopLatest /> */}

        {/* blog */}
        <section className="blog-video section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title d-flex justify-content-between">
                            <h3>Take a tour of <span>Fancy</span> </h3>
                            <a href="/blog"><button className="seemore-btn">View More <i className="fa fa-sign-out"></i></button></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="single-blog-item-grid mb-4">
                            <a href="/" className="single-blog-item">
                                <div className="single-blog-item-video">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe title="blog" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F&width=500&show_text=false&height=280&appId"></iframe>
                                    </div>
                                </div>
                                <div className="single-blog-item-text">
                                    <h3>Makeup Makeover</h3>
                                    <h4>Published : 26 February , 2022</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="single-blog-item-grid mb-4">
                            <a href="/" className="single-blog-item">
                                <div className="single-blog-item-video">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe title="blog" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F&width=500&show_text=false&height=280&appId"></iframe>
                                    </div>
                                </div>
                                <div className="single-blog-item-text">
                                    <h3>Makeup Makeover</h3>
                                    <h4>Published : 2 March , 2022</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="single-blog-item-grid">
                            <a href="/" className="single-blog-item">
                                <div className="single-blog-item-video">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe title="blog" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F&width=500&show_text=false&height=280&appId"></iframe>
                                    </div>
                                </div>
                                <div className="single-blog-item-text">
                                    <h3>Makeup Makeover</h3>
                                    <h4>Published : 6 March , 2022</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Facility */}
        <section className="facility-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="facility-title section-title">
                                <h3>Why shop With us?</h3>
                            </div>
                        </div>
                    </div>
                    <div className="facility-section-content">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="facility-left">
                                    <div className="facility-section-left d-flex">
                                        <div className="facility-section-left-text">
                                            <h5>Quickest Delivery</h5>
                                            <p>We would love to make our consumers feel like shop next to their door by ensuring quickest delivery service.</p>
                                        </div>
                                        <div className="facility-section-icon">
                                            <img src="./assets/img/icons/car.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="facility-section-left d-flex">
                                        <div className="facility-section-left-text">
                                            <h5>Honesty & Integrity</h5>
                                            <p>Our aim is to earn halal income for our stakeholders through doing business with integrity & honestly in a fair manner.</p>
                                        </div>
                                        <div className="facility-section-icon">
                                            <img src="./assets/img/icons/heart.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="facility-section-left d-flex">
                                        <div className="facility-section-left-text">
                                            <h5>Environmental safety</h5>
                                            <p>We always work on keeping a healthy environment for our employees. We dump and recycle our wastes in proper manner.</p>
                                        </div>
                                        <div className="facility-section-icon">
                                            <img src="./assets/img/icons/leaf.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="facility-section-center ">
                                    <img src="./assets/img/bg.png" alt="" className="img-fluid" height="510px" width="391px"/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="facility-right">
                                    <div className="facility-section-right d-flex">
                                        <div className="facility-section-icon">
                                            <img src="./assets/img/icons/safety.png" alt=""/>
                                        </div>
                                        <div className="facility-section-right-text">
                                            <h5>Refund Gurenty</h5>
                                            <p>We would love to make our consumers feel like shop next to their door by ensuring quickest delivery service.</p>
                                        </div>
                                    </div>
                                    <div className="facility-section-right d-flex">
                                        <div className="facility-section-icon">
                                            <img src="./assets/img/icons/spoon.png" alt=""/>
                                        </div>
                                        <div className="facility-section-right-text">
                                            <h5>Client Satisfaction</h5>
                                            <p>We always work on keeping a healthy environment for our employees. We dump and recycle our wastes in proper manner.</p>
                                        </div>
                                    </div>
                                    <div className="facility-section-right d-flex">
                                        <div className="facility-section-icon">
                                            <img src="./assets/img/icons/heart.png" alt=""/>
                                        </div>
                                        <div className="facility-section-right-text">
                                            <h5>Safe Product</h5>
                                            <p>We always work on keeping a healthy environment for our employees. We dump and recycle our wastes in proper manner.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

      </div>
    )
  }
}
export default Home;