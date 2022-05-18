import React from 'react'
import Slider from 'react-slick'

function productSlick() {

    var productSlider = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 6,
        slidesToScroll: 1
    }
  return (
    <Slider {...productSlider}>
        
       <div className="product-item">
            <a href="/product-details">
                <div className="pi-pic">
                    <img className="card-product-img" src="assets/img/product/8.jpg" alt=""/>
                </div>
                <div className="product-info">
                    <div className="pi-text text-center">
                        <h5>Lorem ipsum dolor sit</h5>
                    </div>

                    <div className="p-box">
                        <span className="ta-old-price">৳ 35,00</span>
                        <span className="ta-current-price">৳ 30,00</span>
                    </div>
                    <div className="button product-btn text-center" id="button-cart">
                        <div id="dub-arrow">
                            <a href="/" className="add-card" data-toggle="modal" data-target="#BuynowModal"><i className="fa fa-envelope" title="Connect with us"></i></a>
                            <a href="/product-details" className="add-card"><i className="fa fa-eye " title="View details"></i></a>
                            <a href="/cart" className="last-icon add-card"><i className="fa fa-cart-plus" title="Add to cart"></i></a>
                        </div>
                        <a className="cart-text" href="/cart">Add to cart</a>
                    </div>
                </div>
            </a>
        </div>
        <div className="product-item">
            <a href="/product-details">
                <div className="pi-pic">
                    <img className="card-product-img" src="assets/img/product/9.jpg" alt=""/>
                </div>
                <div className="product-info">
                    <div className="pi-text text-center">
                        <h5>Lorem ipsum dolor sit</h5>
                    </div>

                    <div className="p-box">
                        <span className="ta-old-price">৳ 35,00</span>
                        <span className="ta-current-price">৳ 30,00</span>
                    </div>
                    <div className="button product-btn text-center" id="button-cart">
                        <div id="dub-arrow">
                            <a href="/" className="add-card" data-toggle="modal" data-target="#BuynowModal"><i className="fa fa-envelope" title="Connect with us"></i></a>
                            <a href="/product-details" className="add-card"><i className="fa fa-eye " title="View details"></i></a>
                            <a href="/cart" className="last-icon add-card"><i className="fa fa-cart-plus" title="Add to cart"></i></a>
                        </div>
                        <a className="cart-text" href="/cart">Add to cart</a>
                    </div>
                </div>
            </a>
        </div>
        <div className="product-item">
            <a href="/product-details">
                <div className="pi-pic">
                    <img className="card-product-img" src="assets/img/product/11.jpg" alt=""/>
                </div>
                <div className="product-info">
                    <div className="pi-text text-center">
                        <h5>Lorem ipsum dolor sit</h5>
                    </div>

                    <div className="p-box">
                        <span className="ta-old-price">৳ 35,00</span>
                        <span className="ta-current-price">৳ 30,00</span>
                    </div>
                    <div className="button product-btn text-center" id="button-cart">
                        <div id="dub-arrow">
                            <a href="/" className="add-card" data-toggle="modal" data-target="#BuynowModal"><i className="fa fa-envelope" title="Connect with us"></i></a>
                            <a href="/product-details" className="add-card"><i className="fa fa-eye " title="View details"></i></a>
                            <a href="/cart" className="last-icon add-card"><i className="fa fa-cart-plus" title="Add to cart"></i></a>
                        </div>
                        <a className="cart-text" href="/cart">Add to cart</a>
                    </div>
                </div>
            </a>
        </div>
        <div className="product-item">
            <a href="/product-details">
                <div className="pi-pic">
                    <img className="card-product-img" src="assets/img/product/12.jpg" alt=""/>
                </div>
                <div className="product-info">
                    <div className="pi-text text-center">
                        <h5>Lorem ipsum dolor sit</h5>
                    </div>

                    <div className="p-box">
                        <span className="ta-old-price">৳ 35,00</span>
                        <span className="ta-current-price">৳ 30,00</span>
                    </div>
                    <div className="button product-btn text-center" id="button-cart">
                        <div id="dub-arrow">
                            <a href="/" className="add-card" data-toggle="modal" data-target="#BuynowModal"><i className="fa fa-envelope" title="Connect with us"></i></a>
                            <a href="/product-details" className="add-card"><i className="fa fa-eye " title="View details"></i></a>
                            <a href="/cart" className="last-icon add-card"><i className="fa fa-cart-plus" title="Add to cart"></i></a>
                        </div>
                        <a className="cart-text" href="/cart">Add to cart</a>
                    </div>
                </div>
            </a>
        </div>
        <div className="product-item">
            <a href="/product-details">
                <div className="pi-pic">
                    <img className="card-product-img" src="assets/img/product/13.jpg" alt=""/>
                </div>
                <div className="product-info">
                    <div className="pi-text text-center">
                        <h5>Lorem ipsum dolor sit</h5>
                    </div>

                    <div className="p-box">
                        <span className="ta-old-price">৳ 35,00</span>
                        <span className="ta-current-price">৳ 30,00</span>
                    </div>
                    <div className="button product-btn text-center" id="button-cart">
                        <div id="dub-arrow">
                            <a href="/" className="add-card" data-toggle="modal" data-target="#BuynowModal"><i className="fa fa-envelope" title="Connect with us"></i></a>
                            <a href="/product-details" className="add-card "><i className="fa fa-eye " title="View details"></i></a>
                            <a href="/cart" className="last-icon add-card"><i className="fa fa-cart-plus" title="Add to cart"></i></a>
                        </div>
                        <a className="cart-text" href="/cart">Add to cart</a>
                    </div>
                </div>
            </a>
        </div> 
    </Slider>
  )
}
export default productSlick;