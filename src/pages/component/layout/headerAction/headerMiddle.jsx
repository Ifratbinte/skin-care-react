import React, { Component } from 'react'

class headerMiddle extends Component {
  render() {
    return (
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

                <div id="search-bar" class="col-lg-7 col-md-5 col-sm-8 ">
                    <form class="header-search-form">
                        <div class="input-group md-form form-sm form-2 pl-0">
                            <input type="text" class="s" placeholder="Search for products..." value="" name="s" autocomplete="off"/> <i class="flaticon-search"></i>
                        </div>
                    </form>
                </div>

                <div class="col-lg-3 col-md-3 col-sm-12 socialIcon">
                    <ul class="social-icon">
                        <li class="facebook"><a href="/"><i class="fa fa-facebook"></i></a></li>
                        <li class="twitter"><a href="/"><i class="fa fa-twitter"></i></a></li>
                        <li class="linkedin"><a href="/"><i class="fa fa-linkedin"></i></a></li>
                        <li class="instagram"><a href="/"><i class="fa fa-instagram"></i></a></li>
                        <li class="youtube"><a href="/"><i class="fa fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
export default headerMiddle;
