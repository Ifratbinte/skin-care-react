import React, { Component } from 'react'

class HeaderAction extends Component {
  render() {
    return (
        <div className="header-action">
            <ul className="action-nav">
                <li className="action-nav-list">
                    <a href="/login">
                        <div className="quick-icon login-icon">
                            <i className="icon fa fa-user-o mr-2"></i>
                        </div>
                    </a>
                </li>
                <li className="action-nav-list">
                    <div className="user-lang">
                        <a href="/" className="ban-bdt">
                            <div className="quick-icon">
                                <img className="icon" src="assets/img/icons/flag.png" alt=""/>
                            </div>
                        </a>
                        <div className="lang-form">
                            <h5 className="lang-regional">Regional Settings</h5>
                            <form action="">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Country/Region</label>
                                    <select className="form-control select-icon" id="country1">
                                        <option value="item1" >Bangladesh</option>
                                        <option value="item2" >India</option>
                                        <option value="item3" >Japan</option>
                                        <option value="item4">US</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Language</label>
                                    <select className="form-control select-icon" id="language1">
                                        <option value='1'>Bangla</option>
                                    </select>
                                </div>
                                <a href="/" className="lang-btn">Save</a>
                            </form>
                        </div>
                    </div>
                </li>
                <li className="action-nav-list">
                    <div className="cart-box-wrapper">
                        <a className="cart-info" href="cart.html">
                            <span className="quick-icon">
                                <i className="icon fa fa-shopping-bag"></i>
                                <span className="quantity">0</span>
                            </span>
                        </a>
                        <div className="cart-dropdown">
                            <div className="cart-scroll-content">
                                <div className="single-cart-item d-flex">
                                    <a href="/" className="cart-first-child">
                                        <div className="cart-item-content media">
                                            <img src="assets/img/category/cat7.jpeg" alt="" className=""/>
                                            <div className="d-flex">
                                                <div className="cart-p-price media-body">
                                                    <h6 className="">Whiting cream</h6>
                                                    <p><span>1 <i className="fa fa-times" aria-hidden="true"></i></span> ৳ 32.00</p>
                                                </div>
                                                <div className="deletebtn"><i className="fa fa-close"></i></div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="single-cart-item d-flex">
                                    <a href="/">
                                        <div className="cart-item-content media">
                                            <img src="assets/img/category/cat8.jpg" alt="" className=""/>
                                            <div className="cart-p-price media-body">
                                                <h6 className="">Whiting cream</h6>
                                                <p><span>1 <i className="fa fa-times" aria-hidden="true"></i></span> ৳ 32.00</p>
                                            </div>
                                            <div className="deletebtn"><i className="fa fa-close"></i></div>
                                        </div>
                                    </a>
                                </div>
                                <div className="single-cart-item d-flex">
                                    <a href="/">
                                        <div className="cart-item-content media">
                                            <img src="assets/img/category/cat9.jpg" alt="" className=""/>
                                            <div className="cart-p-price media-body">
                                                <h6 className="">Whiting cream</h6>
                                                <p><span>1 <i className="fa fa-times" aria-hidden="true"></i></span> ৳ 32.00</p>
                                            </div>
                                            <div className="deletebtn"><i className="fa fa-close"></i></div>
                                        </div>
                                    </a>
                                </div>
                                <div className="single-cart-item d-flex">
                                    <a href="/">
                                        <div className="cart-item-content media">
                                            <img src="assets/img/category/cat10.jpeg" alt="" className=""/>
                                            <div className="cart-p-price media-body">
                                                <h6 className="">Whiting cream</h6>
                                                <p><span>1 <i className="fa fa-times" aria-hidden="true"></i></span> ৳ 32.00</p>
                                            </div>
                                            <div className="deletebtn"><i className="fa fa-close"></i></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="cart-item-amount">
                                <div className="cart-amount">
                                    <strong>Subtotal :</strong>
                                    <span className="price-currency"> ৳ 32</span>
                                </div>
                            </div>
                            <div className="cart-details-button">
                                <a href="cart.html" className="button-round btn-transparent">View cart</a>
                                <a href="checkout.html" className="button-round btn-bg">Checkout</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
  }
}
export default HeaderAction;
