import React, { Component } from 'react'
import IncrementDecrement from './cart/incrementDecrement';
import ShoppingCart from './cart/shoppingCart';

class Cart extends Component {
  render() {
    return (

      <div className="cart-details section-gap-lg">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-12">
                    <div className="table-inner table-responsive">
                        <table className="table">
                            <thead>
                                <tr className="table-head-title">
                                    <th className="table-product-title">Product</th>
                                    <th className="text-center">Quantity</th>
                                    <th className="text-center">Price</th>
                                    <th className="text-center">Subtotal</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody className="single-cart-product">
                                <tr>
                                    <td className="col-lg-5 col-sm-8">
                                        <div className="single-cart-product-media">
                                            <a className="thumbnail" href="/"><img className="cart-product-img" src="assets/img/product/13.jpg" alt=''/></a>
                                            <div className="single-cart-product-media-name">
                                                <a href="/">Hair color</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="col-lg-2 col-sm-1">
                                        <div className="cart-product-qunty mt-3">
                                            <IncrementDecrement/>
                                        </div>
                                    </td>
                                    <td className="col-lg-2 col-sm-1">
                                        <div className="single-cart-product-price text-center">
                                            <p>৳ 400</p>
                                        </div>
                                    </td>
                                    <td className="col-lg-2 col-sm-1">
                                        <div className="single-cart-product-subtotal-price text-center">
                                            <p>৳ 400</p>
                                        </div>
                                    </td>
                                    <td className="col-lg-1 col-sm-1">
                                        <div className="single-cart-product-remove">
                                            <a href="/"> <i className="fa fa-close "></i></a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="cart-total-price-info">
                        <div className="cart-total-price-info-title">
                            <h4>CART TOTALS</h4>
                            <table className="table cart-price-amount">
                                <tbody className="cart-total-price-info-price">
                                    <tr className="cart-subtotal">
                                        <th>Subtotal</th>
                                        <td className="subtotal">
                                            <h6>৳ 170</h6>
                                        </td>
                                    </tr>
                                    <tr className="cart-subtotal">
                                        <th>VAT <span>(10%)</span></th>
                                        <td className="subtotal">
                                            <h6>৳ 17</h6>
                                        </td>
                                    </tr>
                                    <tr className="cart-total">
                                        <th>Total</th>
                                        <td className="total">
                                            <h6>৳ 187</h6>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="process-btn">
                                <a href="/checkout" className='button button-round btn-transparent'>Proceed to checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-bottom-button-inner">
                <div className="row">
                    <div className="col-lg-5 col-md-6 col-12">
                        <div className="cart-bottom-button">
                            <div className="continue-shopping">
                                <a href="/product" className="button button-round btn-bg">Continue Shopping</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
export default Cart;