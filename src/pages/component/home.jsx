import React, { Component } from 'react'
import HeroSection from './slider/heroCarousel';
import Category from './category/category'
import TopLatest from './product/topLatest'

class Home extends Component {
  render() {
    return (
      <div>
        <HeroSection />
        <Category />
        <TopLatest />
      </div>
    )
  }
}
export default Home;