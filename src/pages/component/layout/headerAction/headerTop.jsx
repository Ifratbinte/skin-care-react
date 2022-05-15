import React, { Component } from 'react'

class HeaderTop extends Component {
  render() {
    return (
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
    )
  }
}
export default HeaderTop;
