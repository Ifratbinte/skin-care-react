import React from 'react'
import Slider from "react-slick";

function Slick() {

    var slickSlider = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 6,
        slidesToScroll: 1
      };

    return (
        <Slider {...slickSlider}>
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
        </Slider>
    )
}
export default Slick;