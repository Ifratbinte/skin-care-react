import React, {useState} from 'react'
import Product from './product'

const ProductPageRight = () => {

    const [product] = useState(Product);

  return (
    <div className=" col-lg-8 col-xl-9">
        <div className="right-part my-2 rounded">
            <h1 className="products-resp d-lg-none d-md-block text-center py-3">Products</h1>
            <div className="row ">
                {
                    product.map((elem) => {
                        const {id, image, name, oldprice, currentPrice} = elem;
                        return(
                            <div key={elem.id} className="col-xl-3 col-md-4 col-sm-6">
                                <a href="/product-details">
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <img className="card-product-img" src={image} alt=""/>
                                        </div>
                                        <div className="product-info">
                                            <div className="pi-text text-center">
                                                <h5>{name}</h5>
                                            </div>

                                            <div className="p-box">
                                                <span className="ta-old-price">{oldprice}</span>
                                                <span className="ta-current-price">{currentPrice}</span>
                                            </div>
                                            <div className="button product-btn text-center" id="button-cart">
                                                <div id="dub-arrow">
                                                    <a href="/" className="add-card" data-toggle="modal" data-target="#BuynowModal"><i className="fa fa-envelope" data-toggle="tooltip" data-placement="bottom" title="Connect with us"></i></a>
                                                    <a href="/product-details" className="add-card"><i className="fa fa-eye " data-toggle="tooltip" data-placement="bottom" title="View details"></i></a>
                                                    <a  href="/cart" className="last-icon add-card"><i className="fa fa-cart-plus" data-toggle="tooltip" data-placement="bottom" title="Add to cart"></i></a>
                                                </div>
                                                <a className="cart-text" href="/">Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    })
                }

            </div>
            <a href="/" className="loadMore-btn seemore-btn mt-3" id=" ">Load More</a>
        </div>
    </div>
  )
}
export default ProductPageRight;