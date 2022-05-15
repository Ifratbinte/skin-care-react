import React, { Component } from 'react'

class HeaderAction extends Component {
  render() {
    return (
        <div class="header-action">
            <ul class="action-nav">
                <li class="action-nav-list">
                    <a href="login.html">
                        <div class="quick-icon login-icon">
                            <i class="icon fa fa-user-o mr-2"></i>
                        </div>
                    </a>
                </li>
                <li class="action-nav-list">
                    <div class="user-lang">
                        <a href="/" class="ban-bdt">
                            <div class="quick-icon">
                                <img class="icon" src="assets/img/icons/flag.png" alt=""/>
                            </div>
                        </a>
                        <div class="lang-form">
                            <h5 class="lang-regional">Regional Settings</h5>
                            <form action="">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Country/Region</label>
                                    <select class="form-control select-icon" id="country1">
                                        <option value="item1" >Bangladesh</option>
                                        <option value="item2" >India</option>
                                        <option value="item3" >Japan</option>
                                        <option value="item4">US</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Language</label>
                                    <select class="form-control select-icon" id="language1">
                                        <option value='1'>Bangla</option>
                                    </select>
                                </div>
                                <a href="/" class="lang-btn">Save</a>
                            </form>
                        </div>
                    </div>
                </li>
                <li class="action-nav-list">
                    <div class="cart-box-wrapper">
                        <a class="cart-info" href="cart.html">
                            <span class="quick-icon">
                                <i class="icon fa fa-shopping-bag"></i>
                                <span class="quantity">0</span>
                            </span>
                        </a>
                        <div class="cart-dropdown">
                            <div class="cart-scroll-content">
                                <div class="single-cart-item d-flex">
                                    <a href="/" class="cart-first-child">
                                        <div class="cart-item-content media">
                                            <img src="assets/img/category/cat7.jpeg" alt="" class=""/>
                                            <div class="d-flex">
                                                <div class="cart-p-price media-body">
                                                    <h6 class="">Whiting cream</h6>
                                                    <p><span>1 <i class="fa fa-times" aria-hidden="true"></i></span> ৳ 32.00</p>
                                                </div>
                                                <div class="deletebtn"><i class="fa fa-close"></i></div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="single-cart-item d-flex">
                                    <a href="/">
                                        <div class="cart-item-content media">
                                            <img src="assets/img/category/cat8.jpg" alt="" class=""/>
                                            <div class="cart-p-price media-body">
                                                <h6 class="">Whiting cream</h6>
                                                <p><span>1 <i class="fa fa-times" aria-hidden="true"></i></span> ৳ 32.00</p>
                                            </div>
                                            <div class="deletebtn"><i class="fa fa-close"></i></div>
                                        </div>
                                    </a>
                                </div>
                                <div class="single-cart-item d-flex">
                                    <a href="/">
                                        <div class="cart-item-content media">
                                            <img src="assets/img/category/cat9.jpg" alt="" class=""/>
                                            <div class="cart-p-price media-body">
                                                <h6 class="">Whiting cream</h6>
                                                <p><span>1 <i class="fa fa-times" aria-hidden="true"></i></span> ৳ 32.00</p>
                                            </div>
                                            <div class="deletebtn"><i class="fa fa-close"></i></div>
                                        </div>
                                    </a>
                                </div>
                                <div class="single-cart-item d-flex">
                                    <a href="/">
                                        <div class="cart-item-content media">
                                            <img src="assets/img/category/cat10.jpeg" alt="" class=""/>
                                            <div class="cart-p-price media-body">
                                                <h6 class="">Whiting cream</h6>
                                                <p><span>1 <i class="fa fa-times" aria-hidden="true"></i></span> ৳ 32.00</p>
                                            </div>
                                            <div class="deletebtn"><i class="fa fa-close"></i></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="cart-item-amount">
                                <div class="cart-amount">
                                    <strong>Subtotal :</strong>
                                    <span class="price-currency"> ৳ 32</span>
                                </div>
                            </div>
                            <div class="cart-details-button">
                                <a href="cart.html" class="button-round btn-transparent">View cart</a>
                                <a href="checkout.html" class="button-round btn-bg">Checkout</a>
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
