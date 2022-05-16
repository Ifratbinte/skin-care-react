import React, { Component } from 'react'
import HeaderRes from './component/layout/headerRes'
import HeaderTP from './component/layout/HeaderTP'
import Home from './component/home'
// import ThankYou from './component/thankYou'

class Index extends Component {
  render() {
    return (
      <div>
        <HeaderRes />
        {/* Scroll Top Button */}
        <div class="page_top">
            <a href="/">
                <i class="fa fa-chevron-up scroll-icon"></i>
            </a> 
        </div>

        {/* main container */}
        <div class="body-container">
          <HeaderTP />
          <Home />
        </div>
      </div>
    )
  }
}
export default Index;
