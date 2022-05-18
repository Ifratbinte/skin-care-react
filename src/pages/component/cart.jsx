import React, { Component } from 'react'

class Cart extends Component {
  render() {
    return (
      <div class="cart-details mb-5">
      <div class="container">
          <h3 class="d-block text-center pb-4 cart-resp-head mb-5">Cart</h3>
          <div class="row">
              <div class="col-lg-8 col-sm-12">
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="table-responsive">
                              <table class="table">
                                  <thead>
                                      <tr class="table-head-title">
                                          <th class="table-product-title">Product</th>
                                          <th class="text-center">Quantity</th>
                                          <th class="text-center">Price</th>
                                          <th class="text-center">Subtotal</th>
                                          <th> </th>
                                      </tr>
                                  </thead>
                                  <tbody class="single-cart-product">
                                      <tr>
                                          <td class="col-lg-5 col-sm-8">
                                              <div class="single-cart-product-media">
                                                  <a class="thumbnail" href="/"><img class="cart-product-img" src="assets/img/product/13.jpg" alt=''/></a>
                                                  <div class="single-cart-product-media-name">
                                                      <a href="/">Hair color</a>
                                                  </div>
                                              </div>
                                          </td>
                                          <td class="col-lg-2 col-sm-1">
                                              <div class="cart-product-qunty">
                                                  <ul>
                                                      <li class="entry value-minus"><i class="fa fa-minus" aria-hidden="true"></i></li>
                                                      <li class="entry value"><span>1</span></li>
                                                      <li class="entry value-plus active"><i class="fa fa-plus" aria-hidden="true"></i></li>
                                                  </ul>
                                              </div>
                                          </td>
                                          <td class="col-lg-2 col-sm-1">
                                              <div class="single-cart-product-price">
                                                  <p>৳ 400</p>
                                              </div>
                                          </td>
                                          <td class="col-lg-2 col-sm-1 text-center">
                                              <div class="single-cart-product-subtotal-price">
                                                  <p>৳ 400</p>
                                              </div>
                                          </td>
                                          <td class="col-lg-1 col-sm-1">
                                              <div class="single-cart-product-remove">
                                                  <a href="/"> <i class="fa fa-close "></i></a>
                                              </div>
                                          </td>
                                      </tr>
                                  </tbody>
                                  <tbody class="single-cart-product">
                                      <tr>
                                          <td class="col-lg-5 col-sm-8">
                                              <div class="single-cart-product-media">
                                                  <a class="thumbnail" href="/"><img class="cart-product-img" src="assets/img/product/15.jpg" alt=''/></a>
                                                  <div class="single-cart-product-media-name">
                                                      <a href="/">Facial Cream</a>
                                                  </div>
                                              </div>
                                          </td>
                                          <td class="col-lg-2 col-sm-1">
                                              <div class="cart-product-qunty">
                                                  <ul>
                                                      <li class="entry value-minus"><i class="fa fa-minus" aria-hidden="true"></i></li>
                                                      <li class="entry value"><span>1</span></li>
                                                      <li class="entry value-plus active"><i class="fa fa-plus" aria-hidden="true"></i></li>
                                                  </ul>
                                              </div>
                                          </td>
                                          <td class="col-lg-2 col-sm-1">
                                              <div class="single-cart-product-price">
                                                  <p>৳ 270</p>
                                              </div>
                                          </td>
                                          <td class="col-lg-2 col-sm-1  text-center">
                                              <div class="single-cart-product-subtotal-price">
                                                  <p>৳ 270</p>
                                              </div>
                                          </td>
                                          <td class="col-lg-1 col-sm-1 ">
                                              <div class="single-cart-product-remove ">
                                                  <a href="/"> <i class="fa fa-close "></i></a>
                                              </div>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
                  <div class="cart-bottom-button-inner">
                      <div class="row">
                          <div class="col-lg-5 col-md-6 col-12">
                              <div class="cart-bottom-button">
                                  <div class="continue-shopping ">
                                      <a href="product.html" class="button button-round btn-bg">Continue Shopping</a>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-7 col-md-6 col-12">
                              <div class="cart-bottom-button">
                                  <div class="product-cart-copon">
                                      <form class="apply-coupon" action="#">
                                          <input placeholder="Coupon code" type="text" class="input-coupon2 copon-code"/>
                                          <a href="/" class="button button-round btn-bg">Apply</a>
                                      </form>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-sm-12">
                  <div class="cart-total-price-info">
                      <div class="cart-total-price-info-title">
                          <h4>CART TOTALS</h4>
                          <table class="table cart-price-amount">
                              <tbody class="cart-total-price-info-price">
                                  <tr class="cart-subtotal">
                                      <th>Subtotal</th>
                                      <td class="subtotal">
                                          <h6>৳ 170</h6>
                                      </td>
                                  </tr>
                                  <tr class="cart-subtotal">
                                      <th>VAT <span>(10%)</span></th>
                                      <td class="subtotal">
                                          <h6>৳ 17</h6>
                                      </td>
                                  </tr>
                                  <tr class="cart-total">
                                      <th>Total</th>
                                      <td class="total">
                                          <h6>৳ 187</h6>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <div class="process-btn">
                              <a href="checkout.html" className='button button-round btn-transparent'>Proceed to checkout</a>
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