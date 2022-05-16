import React, { Component } from 'react'
import HeroSection from './slider/heroCarousel';
import Category from './category/category'

class Home extends Component {
  render() {
    return (
      <div>
        <HeroSection />
        <Category />
      </div>
    )
  }
}
export default Home;