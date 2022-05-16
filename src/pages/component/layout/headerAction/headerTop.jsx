import React, { Component } from 'react'

class HeaderTop extends Component {
  render() {
    return (
        <div className="top-header d-none d-lg-block">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-2">
                        <div className="contact-info">
                            <ul>
                                <li><a href="/"><i className="fa fa-envelope"></i> info@domain.com </a></li>
                                <li><a href="/"><i className="fa fa-phone"></i> +00 879 567 0092 </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-2">
                        <div className="topbar-menu">
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
