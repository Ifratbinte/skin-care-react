import React, { Component } from 'react'

class headerMiddle extends Component {
  render() {
    return (
        <div className="search-bar sticky">
        <div className="container">
            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-4 ">
                    <div className="logo">
                        <a href="./index.html" className="site-logo">
                            <img src="assets/img/logo.png" alt=""/>
                        </a>
                    </div>
                </div>

                <div id="search-bar" className="col-lg-7 col-md-5 col-sm-8 ">
                    <form className="header-search-form">
                        <div className="input-group md-form form-sm form-2 pl-0">
                            <input type="text" className="s" placeholder="Search for products..." value="" name="s" autocomplete="off"/> <i className="flaticon-search"></i>
                        </div>
                    </form>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-12 socialIcon">
                    <ul className="social-icon">
                        <li className="facebook"><a href="/"><i className="fa fa-facebook"></i></a></li>
                        <li className="twitter"><a href="/"><i className="fa fa-twitter"></i></a></li>
                        <li className="linkedin"><a href="/"><i className="fa fa-linkedin"></i></a></li>
                        <li className="instagram"><a href="/"><i className="fa fa-instagram"></i></a></li>
                        <li className="youtube"><a href="/"><i className="fa fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
export default headerMiddle;
