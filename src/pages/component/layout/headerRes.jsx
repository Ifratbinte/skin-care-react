import React from 'react'

function HeaderRes() {
  return (
    <div className="top-resp-bar bg-light fixed-top d-lg-none">
        <div className="row">
            <div className="col col-sm-6">
                <div className="d-flex">
                    <button data-trigger="#navbar_main" className="d-lg-none p-3 h-100 bar-icon" type="button" id="menubar-collapse"> <i className="fa fa-bars"></i> </button>
                    <div className="logo d-flex justify-content-center">
                        <a href="./index.html" className="site-logo">
                            <img src="assets/img/logo.png" alt=""/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="col col-sm-6">
                <ul className="action-nav-res d-flex align-items-center justify-content-end">
                    <li className="nav-list-res">
                        <a href="/" className="quick-icon-res flag">
                            <img className="icon" src="assets/img/icons/flag.png" alt=""/>
                        </a>
                        <div className="lang-form top-lang-form">
                            <h5 className="lang-regional ">Regional Settings</h5>
                            <form action="">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Country/Region</label>
                                    <select className="form-control" id="country">
                                        <option value="item1" >Bangladesh</option>
                                        <option value="item2" >India</option>
                                        <option value="item3" >Japan</option>
                                        <option value="item4">US</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Language</label>
                                    <select className="form-control" id="language">
                                        <option value='1'>Bangla</option>
                                    </select>
                                </div>

                                <a href="/" className="lang-btn">Save</a>
                            </form>
                        </div>
                    </li>
                    <li className="nav-list-res">
                        <div className="cart-box-wrapper">
                        {/* <a href="/" className="cart-info bar-icon" data-trigger="#navbar_main1" id="menubar-collapse1">
                            <span>
                                <img src="assets/img/cart/cart-2.png" alt=""/>
                                <span className="price">৳ &#48;</span>
                            </span>
                        </a> */}
                        <a className="cart-info" href="cart.html">
                            <span className="quick-icon-res">
                                <i className="icon fa fa-shopping-bag"></i>
                                <span className="quantity">0</span>
                            </span>
                        </a>
                        <div className="list-group mobile-offcanvas1 bg-light" id="navbar_main1">
                            <div className="d-lg-none d-flex justify-content-between p-3">
                                <h3 className="shopping-mini-cart">Shopping Cart</h3>
                                <a href="/" className="btn-close1 d-inline-block"><i className="fa fa-close close-icon"></i></a>
                            </div>

                            <div className="cart-dropdown">
                                <div className="cart-scroll-content">
                                    <div className="single-cart-item">
                                        <div className="cart-item-content media">
                                            <img src="assets/img/category/cat7.jpeg" alt=""/>
                                            <div className="d-flex w-100">
                                                <div className="cart-p-price media-body">
                                                    <h6 className="">Whiting cream</h6>
                                                    <p><span>1 <i className="fa fa-times" aria-hidden="true"></i></span> ৳ 32.00
                                                    </p>
                                                    <div className="cart-product-qunty">
                                                        <ul>
                                                            <li className="entry value-minus"><i className="fa fa-minus" aria-hidden="true"></i></li>
                                                            <li className="entry value"><span>1</span></li>
                                                            <li className="entry value-plus active"><i className="fa fa-plus" aria-hidden="true"></i></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                                <div className="deletebtn"><i className="fa fa-close"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-cart-item ">
                                        <div className="cart-item-content media">
                                            <img src="assets/img/category/cat7.jpeg" alt="" className=""/>
                                            <div className="d-flex w-100">
                                                <div className="cart-p-price media-body">
                                                    <h6 className="">Whiting cream</h6>
                                                    <p><span>1 <i className="fa fa-times" aria-hidden="true"></i></span> ৳ 32.00
                                                    </p>
                                                    <div className="cart-product-qunty">
                                                        <ul>
                                                            <li className="entry value-minus"><i className="fa fa-minus" aria-hidden="true"></i></li>
                                                            <li className="entry value"><span>1</span></li>
                                                            <li className="entry value-plus active"><i className="fa fa-plus" aria-hidden="true"></i></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                                <div className="deletebtn"><i className="fa fa-close"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-cart-item ">
                                        <div className="cart-item-content media">
                                            <img src="assets/img/category/cat7.jpeg" alt="" className=""/>
                                            <div className="d-flex w-100">
                                                <div className="cart-p-price media-body">
                                                    <h6 className="">Whiting cream</h6>
                                                    <p><span>1 <i className="fa fa-times" aria-hidden="true"></i></span> ৳ 32.00
                                                    </p>
                                                    <div className="cart-product-qunty">
                                                        <ul>
                                                            <li className="entry value-minus"><i className="fa fa-minus" aria-hidden="true"></i></li>
                                                            <li className="entry value"><span>1</span></li>
                                                            <li className="entry value-plus active"><i className="fa fa-plus" aria-hidden="true"></i></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                                <div className="deletebtn"><i className="fa fa-close"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-cart-item ">
                                        <div className="cart-item-content media">
                                            <img src="assets/img/category/cat7.jpeg" alt="" className=""/>
                                            <div className="d-flex w-100">
                                                <div className="cart-p-price media-body">
                                                    <h6 className="">Whiting cream</h6>
                                                    <p><span>1 <i className="fa fa-times" aria-hidden="true"></i></span> ৳ 32.00
                                                    </p>
                                                    <div className="cart-product-qunty">
                                                        <ul>
                                                            <li className="entry value-minus value-minus1"><i className="fa fa-minus" aria-hidden="true"></i></li>
                                                            <li className="entry value value1"><span>1</span></li>
                                                            <li className="entry value-plus value-plus1 active"><i className="fa fa-plus" aria-hidden="true"></i></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                                <div className="deletebtn"><i className="fa fa-close"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-item-amount">
                                    <table className="table cart-price-amount">
                                        <tbody className="cart-total-price-info-price">
                                            <tr className="cart-subtotal">
                                                <th>Subtotal</th>
                                                <td className="subtotal">
                                                    <h6>৳ 170</h6>
                                                </td>
                                            </tr>
                                            <tr className="cart-subtotal">
                                                <th>VAT <span>(10%)</span></th>
                                                <td className="subtotal">
                                                    <h6>৳ 17</h6>
                                                </td>
                                            </tr>
                                            <tr className="cart-total">
                                                <th>Total</th>
                                                <td className="total">
                                                    <h6>৳ 187</h6>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="cart-details-button">
                                    <a href="cart.html" className="button-round btn-transparent">View cart</a>
                                    <a href="checkout.html" className="button-round btn-bg">Checkout</a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <nav id="navbar_main" className="mobile-offcanvas navbar navbar-expand-lg navbar-dark  ">
            <div className="d-lg-none text-right">
                <a href="/" className="btn-close d-inline-block"><i className="fa fa-close close-icon"></i> </a>
            </div>

            <div className="navbar-nav d-lg-none">
                <div>
                    <form className="header-search-form">
                        <div className="input-group md-form form-sm form-2 pl-0">
                            <input type="text" className="s" placeholder="Search for products..." value="" name="s" autoComplete="off"/> <i className="flaticon-search"></i>
                        </div>
                    </form>
                </div>

                <ul className="nav nav-tabs " id="myTab" role="tablist">
                    <li className="nav-item" style={{flex: 1}}>
                        <a className="nav-link active nav-header" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Menu</a>
                    </li>
                    <li className="nav-item" style={{flex: 1}}>
                        <a className="nav-link nav-header " id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Categories</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <li className="nav-item ">
                            <a className="nav-link category-link-resp" href="index.html">Home</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link category-link-resp" href="product.html">Products</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link category-link-resp" href="contact.html">Contact Us</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link category-link-resp" href="faq.html">Faq</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link category-link-resp" href="blog.html">Blog</a>
                        </li>

                        <li className="nav-item ">
                            <a className="nav-link category-link-resp" href="login.html"><i className="fa fa-user-o mr-2"></i>Login /
                                Registration</a>
                        </li>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                        <div className="list-group resp-list">
                            <div id="accordion">
                                <div className="d-flex">
                                    <a href="/" className="d-block w-100 list-link list-link1"> Mostorizer</a>
                                    <a href="/" className="icon-collapse list-link list-link2 collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    </a>
                                </div>
                                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body p-0">
                                        <div className="list-group">
                                            <a href="/" className="list-group-item list-group-item-action sublist-link border-0">
                                                <i className="fa fa-angle-right"></i>
                                                Baby lotion
                                            </a>
                                        </div>
                                        <div className="list-group">
                                            <a href="/" className="list-group-item list-group-item-action sublist-link border-0">
                                                <i className="fa fa-angle-right"></i>
                                                Skin Whiting
                                            </a>
                                        </div>

                                        <div className="list-group">
                                            <a href="/" className="list-group-item list-group-item-action sublist-link border-0">
                                                <i className="fa fa-angle-right"></i>
                                                Face wash
                                            </a>
                                        </div>
                                        <div className="list-group">
                                            <a href="/" className="list-group-item list-group-item-action sublist-link border-0">
                                                <i className="fa fa-angle-right"></i>
                                                Day Cream
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="accordion1">
                                <div className="d-flex">
                                    <a href="/" className="d-block w-100 list-link list-link1"> Hair Gel</a>
                                    <a href="/" className="icon-collapse list-link list-link2 collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    </a>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion1">
                                    <div className="card-body p-0">
                                        <div className="list-group">
                                            <a href="/" className="list-group-item list-group-item-action sublist-link border-0">
                                                <i className="fa fa-angle-right"></i>
                                                Baby lotion
                                            </a>
                                        </div>
                                        <div className="list-group">
                                            <a href="/" className="list-group-item list-group-item-action sublist-link border-0">
                                                <i className="fa fa-angle-right"></i>
                                                Skin Whiting
                                            </a>
                                        </div>

                                        <div className="list-group">
                                            <a href="/" className="list-group-item list-group-item-action sublist-link border-0">
                                                <i className="fa fa-angle-right"></i>
                                                Face wash
                                            </a>
                                        </div>
                                        <div className="list-group">
                                            <a href="/" className="list-group-item list-group-item-action sublist-link border-0">
                                                <i className="fa fa-angle-right"></i>
                                                Day Cream
                                            </a>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div id="accordion2">
                                <div className="d-flex">
                                    <a href="/" className="d-block w-100 list-link list-link1"> Body Wash</a>
                                    <a href="/" className="icon-collapse list-link list-link2 collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    </a>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion2">
                                    <div className="card-body p-0">
                                        <div className="list-group">
                                            <a href="/" className="list-group-item list-group-item-action sublist-link border-0">
                                                <i className="fa fa-angle-right"></i>
                                                Baby lotion
                                            </a>
                                        </div>
                                        <div className="list-group">
                                            <a href="/" className="list-group-item list-group-item-action sublist-link border-0">
                                                <i className="fa fa-angle-right"></i>
                                                Skin Whiting
                                            </a>
                                        </div>

                                        <div className="list-group">
                                            <a href="/" className="list-group-item list-group-item-action sublist-link border-0">
                                                <i className="fa fa-angle-right"></i>
                                                Face wash
                                            </a>
                                        </div>
                                        <div className="list-group">
                                            <a href="/" className="list-group-item list-group-item-action sublist-link border-0">
                                                <i className="fa fa-angle-right"></i>
                                                Day Cream
                                            </a>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div id="accordion3">
                                <div className="d-flex">
                                    <a href="/" className="d-block w-100 list-link list-link1"> Cosmetics</a>
                                    <a href="/" className="icon-collapse list-link list-link2 collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                    </a>
                                </div>
                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion3">
                                    <div className="card-body p-0">
                                        <div className="list-group">
                                            <a href="/" className="list-group-item list-group-item-action sublist-link border-0">
                                                <i className="fa fa-angle-right"></i>
                                                Baby lotion
                                            </a>
                                        </div>
                                        <div className="list-group">
                                            <a href="/" className="list-group-item list-group-item-action sublist-link border-0">
                                                <i className="fa fa-angle-right"></i>
                                                Skin Whiting
                                            </a>
                                        </div>

                                        <div className="list-group">
                                            <a href="/" className="list-group-item list-group-item-action sublist-link border-0">
                                                <i className="fa fa-angle-right"></i>
                                                Face wash
                                            </a>
                                        </div>
                                        <div className="list-group">
                                            <a href="/" className="list-group-item list-group-item-action sublist-link border-0">
                                                <i className="fa fa-angle-right"></i>
                                                Day Cream
                                            </a>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div id="accordion4">
                                <div className="d-flex">
                                    <a href="/" className="d-block w-100 list-link list-link1"> Skin Whiting</a>
                                    <a href="/" className="icon-collapse list-link list-link2 collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                    </a>
                                </div>
                                <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion4">
                                    <div className="card-body p-0">
                                        <div className="list-group">
                                            <a href="/" className="list-group-item list-group-item-action sublist-link border-0">
                                                <i className="fa fa-angle-right"></i>
                                                Baby lotion
                                            </a>
                                        </div>
                                        <div className="list-group">
                                            <a href="/" className="list-group-item list-group-item-action sublist-link border-0">
                                                <i className="fa fa-angle-right"></i>
                                                Skin Whiting
                                            </a>
                                        </div>

                                        <div className="list-group">
                                            <a href="/" className="list-group-item list-group-item-action sublist-link border-0">
                                                <i className="fa fa-angle-right"></i>
                                                Face wash
                                            </a>
                                        </div>
                                        <div className="list-group">
                                            <a href="/" className="list-group-item list-group-item-action sublist-link border-0">
                                                <i className="fa fa-angle-right"></i>
                                                Day Cream
                                            </a>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div id="accordion5">
                                <div className="d-flex">
                                    <a href="/" className="d-block w-100 list-link list-link1"> Shampoo</a>
                                    <a href="/" className="icon-collapse list-link list-link2 collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                    </a>
                                </div>
                                <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion5">
                                    <div className="card-body p-0">
                                        <div className="list-group">
                                            <a href="/" className="list-group-item list-group-item-action sublist-link border-0">
                                                <i className="fa fa-angle-right"></i>
                                                Baby lotion
                                            </a>
                                        </div>
                                        <div className="list-group">
                                            <a href="/" className="list-group-item list-group-item-action sublist-link border-0">
                                                <i className="fa fa-angle-right"></i>
                                                Skin Whiting
                                            </a>
                                        </div>

                                        <div className="list-group">
                                            <a href="/" className="list-group-item list-group-item-action sublist-link border-0">
                                                <i className="fa fa-angle-right"></i>
                                                Face wash
                                            </a>
                                        </div>
                                        <div className="list-group">
                                            <a href="/" className="list-group-item list-group-item-action sublist-link border-0">
                                                <i className="fa fa-angle-right"></i>
                                                Day Cream
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </nav>
    </div>
  )
}
export default HeaderRes;