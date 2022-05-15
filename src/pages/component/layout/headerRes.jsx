import React from 'react'

function HeaderRes() {
  return (
    <div class="top-resp-bar bg-light fixed-top d-lg-none">
        <div class="row">
            <div class="col col-sm-6">
                <div class="d-flex">
                    <button data-trigger="#navbar_main" class="d-lg-none p-3 h-100 bar-icon" type="button" id="menubar-collapse"> <i class="fa fa-bars"></i> </button>
                    <div class="logo d-flex justify-content-center">
                        <a href="./index.html" class="site-logo">
                            <img src="img/logo.png" alt=""/>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col col-sm-6">
                <div class="row no-gutters">
                    <div class="offset-md-5 offset-sm-4 col-6  col-sm-4">
                        <div class="user-lang">
                            <a href="/" class="ban-bdt top-lang text-right">
                                <img class="lang-icon" src="img/icons/flag.png" alt=""/>
                            </a>
                            <div class="lang-form top-lang-form">
                                <h5 class="lang-regional ">Regional Settings</h5>
                                <form action="">
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Country/Region</label>
                                        <select class="form-control" id="country">
                                    <option value="item1" >Bangladesh</option>
                                    <option value="item2" >India</option>
                                    <option value="item3" >Japan</option>
                                    <option value="item4">US</option>
                                    </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Language</label>
                                        <select class="form-control" id="language">
                                        <option value='1'>Bangla</option>
                                    </select>
                                    </div>

                                    <a href="/" class="lang-btn">Save</a>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3">
                    {/* Cart mini start */}

                        <div class="cart-box-wrapper">
                            <a href="/" class="cart-info bar-icon" data-trigger="#navbar_main1" id="menubar-collapse1">
                                <span>
                                    <img src="img/cart/cart-2.png" alt=""/>
                                    <span class="price">৳ &#48;</span>
                                </span>
                            </a>
                            <div class="list-group mobile-offcanvas1 bg-light" id="navbar_main1">
                                <div class="d-lg-none d-flex justify-content-between p-3">
                                    <h3 class="shopping-mini-cart">Shopping Cart</h3>
                                    <a href="/" class="btn-close1 d-inline-block"><i class="fa fa-close close-icon"></i></a>
                                </div>

                                <div class="cart-dropdown">
                                    <div class="cart-scroll-content">
                                        <div class="single-cart-item">
                                            <div class="cart-item-content media">
                                                <img src="img/category/cat7.jpeg" alt=""/>
                                                <div class="d-flex w-100">
                                                    <div class="cart-p-price media-body">
                                                        <h6 class="">Whiting cream</h6>
                                                        <p><span>1 <i class="fa fa-times" aria-hidden="true"></i></span> ৳ 32.00
                                                        </p>
                                                        <div class="cart-product-qunty">
                                                            <ul>
                                                                <li class="entry value-minus"><i class="fa fa-minus" aria-hidden="true"></i></li>
                                                                <li class="entry value"><span>1</span></li>
                                                                <li class="entry value-plus active"><i class="fa fa-plus" aria-hidden="true"></i></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <div class="deletebtn"><i class="fa fa-close"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="single-cart-item ">
                                            <div class="cart-item-content media">
                                                <img src="img/category/cat7.jpeg" alt="" class=""/>
                                                <div class="d-flex w-100">
                                                    <div class="cart-p-price media-body">
                                                        <h6 class="">Whiting cream</h6>
                                                        <p><span>1 <i class="fa fa-times" aria-hidden="true"></i></span> ৳ 32.00
                                                        </p>
                                                        <div class="cart-product-qunty">
                                                            <ul>
                                                                <li class="entry value-minus"><i class="fa fa-minus" aria-hidden="true"></i></li>
                                                                <li class="entry value"><span>1</span></li>
                                                                <li class="entry value-plus active"><i class="fa fa-plus" aria-hidden="true"></i></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <div class="deletebtn"><i class="fa fa-close"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="single-cart-item ">
                                            <div class="cart-item-content media">
                                                <img src="img/category/cat7.jpeg" alt="" class=""/>
                                                <div class="d-flex w-100">
                                                    <div class="cart-p-price media-body">
                                                        <h6 class="">Whiting cream</h6>
                                                        <p><span>1 <i class="fa fa-times" aria-hidden="true"></i></span> ৳ 32.00
                                                        </p>
                                                        <div class="cart-product-qunty">
                                                            <ul>
                                                                <li class="entry value-minus"><i class="fa fa-minus" aria-hidden="true"></i></li>
                                                                <li class="entry value"><span>1</span></li>
                                                                <li class="entry value-plus active"><i class="fa fa-plus" aria-hidden="true"></i></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <div class="deletebtn"><i class="fa fa-close"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="single-cart-item ">
                                            <div class="cart-item-content media">
                                                <img src="img/category/cat7.jpeg" alt="" class=""/>
                                                <div class="d-flex w-100">
                                                    <div class="cart-p-price media-body">
                                                        <h6 class="">Whiting cream</h6>
                                                        <p><span>1 <i class="fa fa-times" aria-hidden="true"></i></span> ৳ 32.00
                                                        </p>
                                                        <div class="cart-product-qunty">
                                                            <ul>
                                                                <li class="entry value-minus value-minus1"><i class="fa fa-minus" aria-hidden="true"></i></li>
                                                                <li class="entry value value1"><span>1</span></li>
                                                                <li class="entry value-plus value-plus1 active"><i class="fa fa-plus" aria-hidden="true"></i></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <div class="deletebtn"><i class="fa fa-close"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cart-item-amount">
                                        <table class="table cart-price-amount">
                                            <tbody class="cart-total-price-info-price">
                                                <tr class="cart-subtotal">
                                                    <th>Subtotal</th>
                                                    <td class="subtotal">
                                                        <h6>৳ 170</h6>
                                                    </td>
                                                </tr>
                                                <tr class="cart-subtotal">
                                                    <th>VAT <span>(10%)</span></th>
                                                    <td class="subtotal">
                                                        <h6>৳ 17</h6>
                                                    </td>
                                                </tr>
                                                <tr class="cart-total">
                                                    <th>Total</th>
                                                    <td class="total">
                                                        <h6>৳ 187</h6>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="cart-details-button">
                                        <a href="cart.html" class="button-round btn-transparent">View cart</a>
                                        <a href="checkout.html" class="button-round btn-bg">Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav id="navbar_main" class="mobile-offcanvas navbar navbar-expand-lg navbar-dark  ">
            <div class="d-lg-none text-right">
                <a href="/" class="btn-close d-inline-block"><i class="fa fa-close close-icon"></i> </a>
            </div>

            <div class="navbar-nav d-lg-none">
                <div>
                    <form class="header-search-form">
                        <div class="input-group md-form form-sm form-2 pl-0">
                            <input type="text" class="s" placeholder="Search for products..." value="" name="s" autocomplete="off"/> <i class="flaticon-search"></i>
                        </div>
                    </form>
                </div>

                <ul class="nav nav-tabs " id="myTab" role="tablist">
                    <li class="nav-item" style={{flex: 1}}>
                        <a class="nav-link active nav-header" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Menu</a>
                    </li>
                    <li class="nav-item" style={{flex: 1}}>
                        <a class="nav-link nav-header " id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Categories</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <li class="nav-item ">
                            <a class="nav-link category-link-resp" href="index.html">Home</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link category-link-resp" href="product.html">Products</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link category-link-resp" href="contact.html">Contact Us</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link category-link-resp" href="faq.html">Faq</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link category-link-resp" href="blog.html">Blog</a>
                        </li>

                        <li class="nav-item ">
                            <a class="nav-link category-link-resp" href="login.html"><i class="fa fa-user-o mr-2"></i>Login /
                                Registration</a>
                        </li>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                        <div class="list-group resp-list">
                            <div id="accordion">
                                <div class="d-flex">
                                    <a href="/" class="d-block w-100 list-link list-link1"> Mostorizer</a>
                                    <a href="/" class="icon-collapse list-link list-link2 collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    </a>
                                </div>
                                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div class="card-body p-0">
                                        <div class="list-group">
                                            <a href="/" class="list-group-item list-group-item-action sublist-link border-0">
                                                <i class="fa fa-angle-right"></i>
                                                Baby lotion
                                            </a>
                                        </div>
                                        <div class="list-group">
                                            <a href="/" class="list-group-item list-group-item-action sublist-link border-0">
                                                <i class="fa fa-angle-right"></i>
                                                Skin Whiting
                                            </a>
                                        </div>

                                        <div class="list-group">
                                            <a href="/" class="list-group-item list-group-item-action sublist-link border-0">
                                                <i class="fa fa-angle-right"></i>
                                                Face wash
                                            </a>
                                        </div>
                                        <div class="list-group">
                                            <a href="/" class="list-group-item list-group-item-action sublist-link border-0">
                                                <i class="fa fa-angle-right"></i>
                                                Day Cream
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="accordion1">
                                <div class="d-flex">
                                    <a href="/" class="d-block w-100 list-link list-link1"> Hair Gel</a>
                                    <a href="/" class="icon-collapse list-link list-link2 collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    </a>
                                </div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion1">
                                    <div class="card-body p-0">
                                        <div class="list-group">
                                            <a href="/" class="list-group-item list-group-item-action sublist-link border-0">
                                                <i class="fa fa-angle-right"></i>
                                                Baby lotion
                                            </a>
                                        </div>
                                        <div class="list-group">
                                            <a href="/" class="list-group-item list-group-item-action sublist-link border-0">
                                                <i class="fa fa-angle-right"></i>
                                                Skin Whiting
                                            </a>
                                        </div>

                                        <div class="list-group">
                                            <a href="/" class="list-group-item list-group-item-action sublist-link border-0">
                                                <i class="fa fa-angle-right"></i>
                                                Face wash
                                            </a>
                                        </div>
                                        <div class="list-group">
                                            <a href="/" class="list-group-item list-group-item-action sublist-link border-0">
                                                <i class="fa fa-angle-right"></i>
                                                Day Cream
                                            </a>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div id="accordion2">
                                <div class="d-flex">
                                    <a href="/" class="d-block w-100 list-link list-link1"> Body Wash</a>
                                    <a href="/" class="icon-collapse list-link list-link2 collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    </a>
                                </div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion2">
                                    <div class="card-body p-0">
                                        <div class="list-group">
                                            <a href="/" class="list-group-item list-group-item-action sublist-link border-0">
                                                <i class="fa fa-angle-right"></i>
                                                Baby lotion
                                            </a>
                                        </div>
                                        <div class="list-group">
                                            <a href="/" class="list-group-item list-group-item-action sublist-link border-0">
                                                <i class="fa fa-angle-right"></i>
                                                Skin Whiting
                                            </a>
                                        </div>

                                        <div class="list-group">
                                            <a href="/" class="list-group-item list-group-item-action sublist-link border-0">
                                                <i class="fa fa-angle-right"></i>
                                                Face wash
                                            </a>
                                        </div>
                                        <div class="list-group">
                                            <a href="/" class="list-group-item list-group-item-action sublist-link border-0">
                                                <i class="fa fa-angle-right"></i>
                                                Day Cream
                                            </a>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div id="accordion3">
                                <div class="d-flex">
                                    <a href="/" class="d-block w-100 list-link list-link1"> Cosmetics</a>
                                    <a href="/" class="icon-collapse list-link list-link2 collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                    </a>
                                </div>
                                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion3">
                                    <div class="card-body p-0">
                                        <div class="list-group">
                                            <a href="/" class="list-group-item list-group-item-action sublist-link border-0">
                                                <i class="fa fa-angle-right"></i>
                                                Baby lotion
                                            </a>
                                        </div>
                                        <div class="list-group">
                                            <a href="/" class="list-group-item list-group-item-action sublist-link border-0">
                                                <i class="fa fa-angle-right"></i>
                                                Skin Whiting
                                            </a>
                                        </div>

                                        <div class="list-group">
                                            <a href="/" class="list-group-item list-group-item-action sublist-link border-0">
                                                <i class="fa fa-angle-right"></i>
                                                Face wash
                                            </a>
                                        </div>
                                        <div class="list-group">
                                            <a href="/" class="list-group-item list-group-item-action sublist-link border-0">
                                                <i class="fa fa-angle-right"></i>
                                                Day Cream
                                            </a>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div id="accordion4">
                                <div class="d-flex">
                                    <a href="/" class="d-block w-100 list-link list-link1"> Skin Whiting</a>
                                    <a href="/" class="icon-collapse list-link list-link2 collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                    </a>
                                </div>
                                <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion4">
                                    <div class="card-body p-0">
                                        <div class="list-group">
                                            <a href="/" class="list-group-item list-group-item-action sublist-link border-0">
                                                <i class="fa fa-angle-right"></i>
                                                Baby lotion
                                            </a>
                                        </div>
                                        <div class="list-group">
                                            <a href="/" class="list-group-item list-group-item-action sublist-link border-0">
                                                <i class="fa fa-angle-right"></i>
                                                Skin Whiting
                                            </a>
                                        </div>

                                        <div class="list-group">
                                            <a href="/" class="list-group-item list-group-item-action sublist-link border-0">
                                                <i class="fa fa-angle-right"></i>
                                                Face wash
                                            </a>
                                        </div>
                                        <div class="list-group">
                                            <a href="/" class="list-group-item list-group-item-action sublist-link border-0">
                                                <i class="fa fa-angle-right"></i>
                                                Day Cream
                                            </a>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div id="accordion5">
                                <div class="d-flex">
                                    <a href="/" class="d-block w-100 list-link list-link1"> Shampoo</a>
                                    <a href="/" class="icon-collapse list-link list-link2 collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                    </a>
                                </div>
                                <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion5">
                                    <div class="card-body p-0">
                                        <div class="list-group">
                                            <a href="/" class="list-group-item list-group-item-action sublist-link border-0">
                                                <i class="fa fa-angle-right"></i>
                                                Baby lotion
                                            </a>
                                        </div>
                                        <div class="list-group">
                                            <a href="/" class="list-group-item list-group-item-action sublist-link border-0">
                                                <i class="fa fa-angle-right"></i>
                                                Skin Whiting
                                            </a>
                                        </div>

                                        <div class="list-group">
                                            <a href="/" class="list-group-item list-group-item-action sublist-link border-0">
                                                <i class="fa fa-angle-right"></i>
                                                Face wash
                                            </a>
                                        </div>
                                        <div class="list-group">
                                            <a href="/" class="list-group-item list-group-item-action sublist-link border-0">
                                                <i class="fa fa-angle-right"></i>
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