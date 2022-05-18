import React from 'react'

function ProductDetailsContent() {
  return (
    <div className="col-lg-8">
        <div className="single-product-zoom-content">
            <div className="single-product-description">
                <h3>Hair color</h3>
                <p><span>Quick Overview :</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, aut laudantium. Consequatur pariatur architecto, porro quia temporibus labore et qui sed libero sint dolorem! Nulla
                    porro delectus, sint tempore dignissimos incidunt voluptates esse quidem iste hic commodi excepturi voluptas voluptatem debitis ad cumque corrupti vero! Laudantium hic omnis aliquid iste. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Ut eius ratione amet consectetur quidem excepturi qui nihil aspernatur quaerat repudiandae esse modi, veniam alias sint consequuntur maxime recusandae eos facilis.
                </p>
                <div className="single-product-ratings">
                    <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li className="ratings"> <span>12 Ratings</span></li>
                    </ul>
                </div>
            </div>
            <div className="single-product-price">
                <span className="single-product-old-price">৳ 500 </span>
                <span className="single-product-current-price">৳ 400 </span>
            </div>
            <div className="quantity">
                <h5>Quantity :</h5>
                <div className="cart-product-qunty d-flex align-items-center">
                    <ul>
                        <li className="entry value-minus"><i className="fa fa-minus" aria-hidden="true"></i>
                        </li>
                        <li className="entry value"><span>1</span></li>
                        <li className="entry value-plus active"><i className="fa fa-plus" aria-hidden="true"></i></li>
                    </ul>
                    <div className="ml-2">
                        <a href="cart.html" className="button-round btn-transparent btn-small">Add to Cart</a>
                    </div>
                </div>
            </div>
            <div className="single-category">
                <h5>Category : <a href="/">Lotion</a></h5>
            </div>
            <div className="single-product-tags">
                <p><span>Tags :</span> Shampo, Lotion, Cream</p>
            </div>
            <div className="single-product-sku">
                <p><span>SKU :</span> 1001, k5003, pw260</p>
            </div>

            <div className="product-details-buy-button">
                <a href="checkout.html" className="button-round btn-transparent btn-small">Buy Now</a>
            </div>
        </div>
    </div>
  )
}
export default ProductDetailsContent;