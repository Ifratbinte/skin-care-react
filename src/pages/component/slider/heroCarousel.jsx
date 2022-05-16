import React from 'react'

function heroCarousel() {
  return (
      <section className="hero-section">
        <div className="hero-slider">
          <div className="hs-item set-bg img-fluid">
            <div className="container">
              <div className="row">
                <div className="col-md-6 hero-title text-white">
                    <h1>New Cosmetics</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.
                    </p>
                  <a href="cart.html" className="site-btn">ADD TO CART</a>
                </div>
              </div>
              <div className="offer-card text-white imageSpin">
                <span>from</span>
                <h2><span>৳</span> 29</h2>
                <p>SHOP NOW</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
export default heroCarousel;
