import React from 'react'



function HeaderTP() {
    
  return (
    <header class="header-section">
        <div class="top-header d-none d-lg-block">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-2">
                        <div class="contact-info">
                            <ul>
                                <li><a href="/"><i class="fa fa-envelope"></i> info@domain.com </a></li>
                                <li><a href="/"><i class="fa fa-phone"></i> +00 879 567 0092 </a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-2">
                        <div class="topbar-menu">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="product.html">Products</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                                <li><a href="faq.html">Faq</a></li>
                                <li><a href="blog.html">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="search-bar sticky">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2 col-md-2 col-sm-4 ">
                        <div class="logo">
                            <a href="./index.html" class="site-logo">
                                <img src="assets/img/logo.png" alt=""/>
                            </a>
                        </div>
                    </div>
                    {/* <div id="category" class="col-lg-1">
                        <div class="menu header-category" id="header-category" style={{display: show ? "block" : "none"}}>
                            <nav>
                                <ul>
                                    <li><a href="/"><i class="fa fa-bars pr-2"></i> Browse Categories <i class="fa fa-angle-down"></i></a>
                                        <ul class="submenu">
                                            <li class="static"><a href="/">Mostorier<i class="fa fa-angle-right"></i></a>
                                                <div class="mega-menu mega-full">
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Lotion</a></li>
                                                        <li><a href="/">Baby Lotion</a></li>
                                                        <li><a href="/">Mostorizer</a></li>
                                                        <li><a href="/">Body lotion</a></li>
                                                        <li><a href="/">Skin Whiting</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cream</a></li>
                                                        <li><a href="/">Night Cream</a></li>
                                                        <li><a href="/">Day cream</a></li>
                                                        <li><a href="/">Suns Skin</a></li>
                                                        <li><a href="/">Dry skin</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Skincare</a></li>
                                                        <li><a href="/">Alovera gel</a></li>
                                                        <li><a href="/"> face wash</a></li>
                                                        <li><a href="/">Clean clear</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cosmetics</a></li>
                                                        <li><a href="/">Lipstic</a></li>
                                                        <li><a href="/">Face powder</a></li>
                                                        <li><a href="/">Eye liner</a></li>
                                                        <li><a href="/">face wash</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="static"><a href="/">Hair Gel<i class="fa fa-angle-right"></i></a>
                                                <div class="mega-menu mega-full">
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Lotion</a></li>
                                                        <li><a href="/">Baby Lotion</a></li>
                                                        <li><a href="/">Mostorizer</a></li>
                                                        <li><a href="/">Body lotion</a></li>
                                                        <li><a href="/">Skin Whiting</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cream</a></li>
                                                        <li><a href="/">Night Cream</a></li>
                                                        <li><a href="/">Day cream</a></li>
                                                        <li><a href="/">Suns Skin</a></li>
                                                        <li><a href="/">Dry skin</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Skincare</a></li>
                                                        <li><a href="/">Alovera gel</a></li>
                                                        <li><a href="/"> face wash</a></li>
                                                        <li><a href="/">Clean clear</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cosmetics</a></li>
                                                        <li><a href="/">Lipstic</a></li>
                                                        <li><a href="/">Face powder</a></li>
                                                        <li><a href="/">Eye liner</a></li>
                                                        <li><a href="/">face wash</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="static"><a href="/">Body Wash<i class="fa fa-angle-right"></i></a>
                                                <div class="mega-menu mega-full">
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Lotion</a></li>
                                                        <li><a href="/">Baby Lotion</a></li>
                                                        <li><a href="/">Mostorizer</a></li>
                                                        <li><a href="/">Body lotion</a></li>
                                                        <li><a href="/">Skin Whiting</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cream</a></li>
                                                        <li><a href="/">Night Cream</a></li>
                                                        <li><a href="/">Day cream</a></li>
                                                        <li><a href="/">Suns Skin</a></li>
                                                        <li><a href="/">Dry skin</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Skincare</a></li>
                                                        <li><a href="/">Alovera gel</a></li>
                                                        <li><a href="/"> face wash</a></li>
                                                        <li><a href="/">Clean clear</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cosmetics</a></li>
                                                        <li><a href="/">Lipstic</a></li>
                                                        <li><a href="/">Face powder</a></li>
                                                        <li><a href="/">Eye liner</a></li>
                                                        <li><a href="/">face wash</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="static"><a href="/">Cosmetics<i class="fa fa-angle-right"></i></a>
                                                <div class="mega-menu mega-full">
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Lotion</a></li>
                                                        <li><a href="/">Baby Lotion</a></li>
                                                        <li><a href="/">Mostorizer</a></li>
                                                        <li><a href="/">Body lotion</a></li>
                                                        <li><a href="/">Skin Whiting</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cream</a></li>
                                                        <li><a href="/">Night Cream</a></li>
                                                        <li><a href="/">Day cream</a></li>
                                                        <li><a href="/">Suns Skin</a></li>
                                                        <li><a href="/">Dry skin</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Skincare</a></li>
                                                        <li><a href="/">Alovera gel</a></li>
                                                        <li><a href="/"> face wash</a></li>
                                                        <li><a href="/">Clean clear</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cosmetics</a></li>
                                                        <li><a href="/">Lipstic</a></li>
                                                        <li><a href="/">Face powder</a></li>
                                                        <li><a href="/">Eye liner</a></li>
                                                        <li><a href="/">face wash</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="static"><a href="/">Skin Whiting<i class="fa fa-angle-right"></i></a>
                                                <div class="mega-menu mega-full">
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Lotion</a></li>
                                                        <li><a href="/">Baby Lotion</a></li>
                                                        <li><a href="/">Mostorizer</a></li>
                                                        <li><a href="/">Body lotion</a></li>
                                                        <li><a href="/">Skin Whiting</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cream</a></li>
                                                        <li><a href="/">Night Cream</a></li>
                                                        <li><a href="/">Day cream</a></li>
                                                        <li><a href="/">Suns Skin</a></li>
                                                        <li><a href="/">Dry skin</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Skincare</a></li>
                                                        <li><a href="/">Alovera gel</a></li>
                                                        <li><a href="/"> face wash</a></li>
                                                        <li><a href="/">Clean clear</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cosmetics</a></li>
                                                        <li><a href="/">Lipstic</a></li>
                                                        <li><a href="/">Face powder</a></li>
                                                        <li><a href="/">Eye liner</a></li>
                                                        <li><a href="/">face wash</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="static"><a href="/">Shampoo<i class="fa fa-angle-right"></i></a>
                                                <div class="mega-menu mega-full">
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Lotion</a></li>
                                                        <li><a href="/">Baby Lotion</a></li>
                                                        <li><a href="/">Mostorizer</a></li>
                                                        <li><a href="/">Body lotion</a></li>
                                                        <li><a href="/">Skin Whiting</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cream</a></li>
                                                        <li><a href="/">Night Cream</a></li>
                                                        <li><a href="/">Day cream</a></li>
                                                        <li><a href="/">Suns Skin</a></li>
                                                        <li><a href="/">Dry skin</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Skincare</a></li>
                                                        <li><a href="/">Alovera gel</a></li>
                                                        <li><a href="/"> face wash</a></li>
                                                        <li><a href="/">Clean clear</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cosmetics</a></li>
                                                        <li><a href="/">Lipstic</a></li>
                                                        <li><a href="/">Face powder</a></li>
                                                        <li><a href="/">Eye liner</a></li>
                                                        <li><a href="/">face wash</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="static"><a href="/">Face wash<i class="fa fa-angle-right"></i></a>
                                                <div class="mega-menu mega-full">
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Lotion</a></li>
                                                        <li><a href="/">Baby Lotion</a></li>
                                                        <li><a href="/">Mostorizer</a></li>
                                                        <li><a href="/">Body lotion</a></li>
                                                        <li><a href="/">Skin Whiting</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cream</a></li>
                                                        <li><a href="/">Night Cream</a></li>
                                                        <li><a href="/">Day cream</a></li>
                                                        <li><a href="/">Suns Skin</a></li>
                                                        <li><a href="/">Dry skin</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Skincare</a></li>
                                                        <li><a href="/">Alovera gel</a></li>
                                                        <li><a href="/"> face wash</a></li>
                                                        <li><a href="/">Clean clear</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cosmetics</a></li>
                                                        <li><a href="/">Lipstic</a></li>
                                                        <li><a href="/">Face powder</a></li>
                                                        <li><a href="/">Eye liner</a></li>
                                                        <li><a href="/">face wash</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="static"><a href="/">Lotion<i class="fa fa-angle-right"></i></a>
                                                <div class="mega-menu mega-full">
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Lotion</a></li>
                                                        <li><a href="/">Baby Lotion</a></li>
                                                        <li><a href="/">Mostorizer</a></li>
                                                        <li><a href="/">Body lotion</a></li>
                                                        <li><a href="/">Skin Whiting</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cream</a></li>
                                                        <li><a href="/">Night Cream</a></li>
                                                        <li><a href="/">Day cream</a></li>
                                                        <li><a href="/">Suns Skin</a></li>
                                                        <li><a href="/">Dry skin</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Skincare</a></li>
                                                        <li><a href="/">Alovera gel</a></li>
                                                        <li><a href="/"> face wash</a></li>
                                                        <li><a href="/">Clean clear</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cosmetics</a></li>
                                                        <li><a href="/">Lipstic</a></li>
                                                        <li><a href="/">Face powder</a></li>
                                                        <li><a href="/">Eye liner</a></li>
                                                        <li><a href="/">face wash</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div> */}
                    <div id="search-bar" class="col-lg-7 col-md-5 col-sm-8 ">
                        <form class="header-search-form">
                            <div class="input-group md-form form-sm form-2 pl-0">
                                <input type="text" class="s" placeholder="Search for products..." value="" name="s" autocomplete="off"/> <i class="flaticon-search"></i>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-12  socialIcon">
                        <ul class="social-icon">
                            <li class="facebook"><a href="/"><i class="fa fa-facebook"></i></a></li>
                            <li class="twitter"><a href="/"><i class="fa fa-twitter"></i></a></li>
                            <li class="linkedin"><a href="/"><i class="fa fa-linkedin"></i></a></li>
                            <li class="instagram"><a href="/"><i class="fa fa-instagram"></i></a></li>
                            <li class="youtube"><a href="/"><i class="fa fa-youtube"></i></a></li>
                        </ul>
                    </div>
                    {/* <div class="col-lg-3 col-md-3 col-sm-12" id="cartId" style={{display: show ? "block" : "none"}}>
                        <div class=" user-panel user-panel1">
                            <ul>
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
                    </div> */}
                </div>
            </div>
        </div>
        <div class="header-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="menu header-category">
                            <nav>
                                <ul>
                                    <li><a href="/"><i class="fa fa-bars pr-2"></i> Browse Categories <i class="fa fa-angle-down"></i></a>
                                        <ul class="submenu">
                                            <li class="static"><a href="/">Mostorier<i class="fa fa-angle-right"></i></a>
                                                <div class="mega-menu mega-full">
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Lotion</a></li>
                                                        <li><a href="/">Baby Lotion</a></li>
                                                        <li><a href="/">Mostorizer</a></li>
                                                        <li><a href="/">Body lotion</a></li>
                                                        <li><a href="/">Skin Whiting</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cream</a></li>
                                                        <li><a href="/">Night Cream</a></li>
                                                        <li><a href="/">Day cream</a></li>
                                                        <li><a href="/">Suns Skin</a></li>
                                                        <li><a href="/">Dry skin</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Skincare</a></li>
                                                        <li><a href="/">Alovera gel</a></li>
                                                        <li><a href="/"> face wash</a></li>
                                                        <li><a href="/">Clean clear</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cosmetics</a></li>
                                                        <li><a href="/">Lipstic</a></li>
                                                        <li><a href="/">Face powder</a></li>
                                                        <li><a href="/">Eye liner</a></li>
                                                        <li><a href="/">face wash</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="static"><a href="/">Hair Gel<i class="fa fa-angle-right"></i></a>
                                                <div class="mega-menu mega-full">
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Lotion</a></li>
                                                        <li><a href="/">Baby Lotion</a></li>
                                                        <li><a href="/">Mostorizer</a></li>
                                                        <li><a href="/">Body lotion</a></li>
                                                        <li><a href="/">Skin Whiting</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cream</a></li>
                                                        <li><a href="/">Night Cream</a></li>
                                                        <li><a href="/">Day cream</a></li>
                                                        <li><a href="/">Suns Skin</a></li>
                                                        <li><a href="/">Dry skin</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Skincare</a></li>
                                                        <li><a href="/">Alovera gel</a></li>
                                                        <li><a href="/"> face wash</a></li>
                                                        <li><a href="/">Clean clear</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cosmetics</a></li>
                                                        <li><a href="/">Lipstic</a></li>
                                                        <li><a href="/">Face powder</a></li>
                                                        <li><a href="/">Eye liner</a></li>
                                                        <li><a href="/">face wash</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="static"><a href="/">Body Wash<i class="fa fa-angle-right"></i></a>
                                                <div class="mega-menu mega-full">
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Lotion</a></li>
                                                        <li><a href="/">Baby Lotion</a></li>
                                                        <li><a href="/">Mostorizer</a></li>
                                                        <li><a href="/">Body lotion</a></li>
                                                        <li><a href="/">Skin Whiting</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cream</a></li>
                                                        <li><a href="/">Night Cream</a></li>
                                                        <li><a href="/">Day cream</a></li>
                                                        <li><a href="/">Suns Skin</a></li>
                                                        <li><a href="/">Dry skin</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Skincare</a></li>
                                                        <li><a href="/">Alovera gel</a></li>
                                                        <li><a href="/"> face wash</a></li>
                                                        <li><a href="/">Clean clear</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cosmetics</a></li>
                                                        <li><a href="/">Lipstic</a></li>
                                                        <li><a href="/">Face powder</a></li>
                                                        <li><a href="/">Eye liner</a></li>
                                                        <li><a href="/">face wash</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="static"><a href="/">Cosmetics<i class="fa fa-angle-right"></i></a>
                                                <div class="mega-menu mega-full">
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Lotion</a></li>
                                                        <li><a href="/">Baby Lotion</a></li>
                                                        <li><a href="/">Mostorizer</a></li>
                                                        <li><a href="/">Body lotion</a></li>
                                                        <li><a href="/">Skin Whiting</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cream</a></li>
                                                        <li><a href="/">Night Cream</a></li>
                                                        <li><a href="/">Day cream</a></li>
                                                        <li><a href="/">Suns Skin</a></li>
                                                        <li><a href="/">Dry skin</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Skincare</a></li>
                                                        <li><a href="/">Alovera gel</a></li>
                                                        <li><a href="/"> face wash</a></li>
                                                        <li><a href="/">Clean clear</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cosmetics</a></li>
                                                        <li><a href="/">Lipstic</a></li>
                                                        <li><a href="/">Face powder</a></li>
                                                        <li><a href="/">Eye liner</a></li>
                                                        <li><a href="/">face wash</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="static"><a href="/">Skin Whiting<i class="fa fa-angle-right"></i></a>
                                                <div class="mega-menu mega-full">
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Lotion</a></li>
                                                        <li><a href="/">Baby Lotion</a></li>
                                                        <li><a href="/">Mostorizer</a></li>
                                                        <li><a href="/">Body lotion</a></li>
                                                        <li><a href="/">Skin Whiting</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cream</a></li>
                                                        <li><a href="/">Night Cream</a></li>
                                                        <li><a href="/">Day cream</a></li>
                                                        <li><a href="/">Suns Skin</a></li>
                                                        <li><a href="/">Dry skin</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Skincare</a></li>
                                                        <li><a href="/">Alovera gel</a></li>
                                                        <li><a href="/"> face wash</a></li>
                                                        <li><a href="/">Clean clear</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cosmetics</a></li>
                                                        <li><a href="/">Lipstic</a></li>
                                                        <li><a href="/">Face powder</a></li>
                                                        <li><a href="/">Eye liner</a></li>
                                                        <li><a href="/">face wash</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="static"><a href="/">Shampoo<i class="fa fa-angle-right"></i></a>
                                                <div class="mega-menu mega-full">
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Lotion</a></li>
                                                        <li><a href="/">Baby Lotion</a></li>
                                                        <li><a href="/">Mostorizer</a></li>
                                                        <li><a href="/">Body lotion</a></li>
                                                        <li><a href="/">Skin Whiting</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cream</a></li>
                                                        <li><a href="/">Night Cream</a></li>
                                                        <li><a href="/">Day cream</a></li>
                                                        <li><a href="/">Suns Skin</a></li>
                                                        <li><a href="/">Dry skin</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Skincare</a></li>
                                                        <li><a href="/">Alovera gel</a></li>
                                                        <li><a href="/"> face wash</a></li>
                                                        <li><a href="/">Clean clear</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cosmetics</a></li>
                                                        <li><a href="/">Lipstic</a></li>
                                                        <li><a href="/">Face powder</a></li>
                                                        <li><a href="/">Eye liner</a></li>
                                                        <li><a href="/">face wash</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="static"><a href="/">Face wash<i class="fa fa-angle-right"></i></a>
                                                <div class="mega-menu mega-full">
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Lotion</a></li>
                                                        <li><a href="/">Baby Lotion</a></li>
                                                        <li><a href="/">Mostorizer</a></li>
                                                        <li><a href="/">Body lotion</a></li>
                                                        <li><a href="/">Skin Whiting</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cream</a></li>
                                                        <li><a href="/">Night Cream</a></li>
                                                        <li><a href="/">Day cream</a></li>
                                                        <li><a href="/">Suns Skin</a></li>
                                                        <li><a href="/">Dry skin</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Skincare</a></li>
                                                        <li><a href="/">Alovera gel</a></li>
                                                        <li><a href="/"> face wash</a></li>
                                                        <li><a href="/">Clean clear</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cosmetics</a></li>
                                                        <li><a href="/">Lipstic</a></li>
                                                        <li><a href="/">Face powder</a></li>
                                                        <li><a href="/">Eye liner</a></li>
                                                        <li><a href="/">face wash</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="static"><a href="/">Lotion<i class="fa fa-angle-right"></i></a>
                                                <div class="mega-menu mega-full">
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Lotion</a></li>
                                                        <li><a href="/">Baby Lotion</a></li>
                                                        <li><a href="/">Mostorizer</a></li>
                                                        <li><a href="/">Body lotion</a></li>
                                                        <li><a href="/">Skin Whiting</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cream</a></li>
                                                        <li><a href="/">Night Cream</a></li>
                                                        <li><a href="/">Day cream</a></li>
                                                        <li><a href="/">Suns Skin</a></li>
                                                        <li><a href="/">Dry skin</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Skincare</a></li>
                                                        <li><a href="/">Alovera gel</a></li>
                                                        <li><a href="/"> face wash</a></li>
                                                        <li><a href="/">Clean clear</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li class="subcate-title"><a href="/">Cosmetics</a></li>
                                                        <li><a href="/">Lipstic</a></li>
                                                        <li><a href="/">Face powder</a></li>
                                                        <li><a href="/">Eye liner</a></li>
                                                        <li><a href="/">face wash</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="col-md-7">

                        {/* <div class="ta-scroll-slider">
                            <div class="single-ta-scroll-slider">
                                <a href="product-details.html">
                                    <div class="media">
                                        <img src="assets/img/category/cat2.png" alt="" class=""/>
                                        <div class="media-body align-self-center">
                                            <h5 class="">Whiting</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="single-ta-scroll-slider">
                                <a href="product-details.html">
                                    <div class="media">
                                        <img src="assets/img/category/cat8.jpg" alt="" class=""/>
                                        <div class="media-body align-self-center">
                                            <h5 class="">Balm</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="single-ta-scroll-slider">
                                <a href="product-details.html">
                                    <div class="media">
                                        <img src="assets/img/category/cat9.jpg" alt="" class=""/>
                                        <div class="media-body align-self-center">
                                            <h5 class="">Lotion</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="single-ta-scroll-slider">
                                <a href="product-details.html">
                                    <div class="media">
                                        <img src="assets/img/category/cat10.jpeg" alt="" class=""/>
                                        <div class="media-body align-self-center">
                                            <h5 class="">Shampoo</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="single-ta-scroll-slider">
                                <a href="product-details.html">
                                    <div class="media">
                                        <img src="assets/img/category/cat11.jpg" alt="" class=""/>
                                        <div class="media-body align-self-center">
                                            <h5 class="">Shaving</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="single-ta-scroll-slider">
                                <a href="product-details.html">
                                    <div class="media">
                                        <img src="assets/img/category/cat12.jpg" alt="" class=""/>
                                        <div class="media-body align-self-center">
                                            <h5 class="">Gel</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="single-ta-scroll-slider">
                                <a href="product-details.html">
                                    <div class="media">
                                        <img src="assets/img/category/cat14.jpg" alt="" class=""/>
                                        <div class="media-body align-self-center">
                                            <h5 class="">Hand Gel</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="single-ta-scroll-slider">
                                <a href="product-details.html">
                                    <div class="media">
                                        <img src="assets/img/category/cat4.jpg" alt="" class=""/>
                                        <div class="media-body align-self-center">
                                            <h5 class="">Cream</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div> */}
                    </div>
                    <div class="col-md-2">
                        <div class="user-panel">
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
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
export default HeaderTP;
