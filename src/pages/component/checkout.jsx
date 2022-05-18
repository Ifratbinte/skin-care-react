import React, { Component } from 'react'

class Checkout extends Component {
  render() {
    return (
      <section className="checkout-section spad">
          <div className="container">
              <h3 className="d-block checkout-resp-head text-center pb-4">checkout</h3>
              <form action="/" className="checkout-form">
                  <div className="row">
                      <div className="col-lg-6">
                          <div className="checkout-content">
                              <a className="content-btn" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Returning Customer? <span> Click here to login</span></a>
                              <div className="row">
                                  <div className="col">
                                      <div className="collapse collapse-down-area" id="multiCollapseExample1">
                                          <div className="card card-body collapse-down-area-content">
                                              <div className="checkout-info">
                                                  <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer please proceed to the Billing &amp; Shipping section.</p>
                                                  <form action="#">
                                                      <div className="row">
                                                          <div className="col-lg-12 form-input-field">
                                                              <label htmlFor="username">Username or Email<span>*</span></label>
                                                              <input type="text" className="form-control" required/>
                                                          </div>

                                                          <div className="col-lg-12 form-input-field">
                                                              <label htmlFor="pass">Password<span>*</span></label>
                                                              <input type="password" className="form-control" required/>
                                                          </div>
                                                          <div className="col-lg-12">
                                                              <a href="/" className="button ckeckout-login-button">Submit</a>
                                                          </div>
                                                          <div className="col -6 col-sm-6 login-varification">
                                                              <div className="custom-control custom-checkbox">
                                                                  <input type="checkbox" className="custom-control-input" id="defaultUnchecked3"/>
                                                                  <label className="custom-control-label" htmlFor="defaultUnchecked3"> Remembar Me </label>
                                                              </div>
                                                          </div>
                                                          <div className="col -6 col-sm-6 login-varification">
                                                              <a href="/">Forget Password?</a>
                                                          </div>
                                                      </div>
                                                  </form>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="checkout-content checkout-info coupon-info">
                              <a className="content-btn" data-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Have a coupon?  <span> Click here to enter your code</span></a>
                              <div className="collapse collapse-down-area  checkout-info" id="multiCollapseExample2">
                                  <div className="card card-body collapse-down-area-content">
                                      <form action="#">
                                          <input placeholder="Coupon code " type="text " className="input-coupon"/>
                                          <a href="/"><button className="copponBtn-round" type="button"> Apply </button></a>
                                      </form>
                                  </div>
                              </div>
                          </div>
                          <div className="billing-section">
                              <h4>Biiling Details</h4>
                              <div className="billing-information">
                                  <div className="row">
                                      <div className="col-lg-6">
                                          <label htmlFor="first">First Name<span>*</span></label>
                                          <input type="text" id="fir"/>
                                      </div>
                                      <div className="col-lg-6">
                                          <label htmlFor="last">Last Name<span>*</span></label>
                                          <input type="text" id="last"/>
                                      </div>
                                      <div className="col-lg-12">
                                          <label htmlFor="district">District<span>*</span></label><br/>
                                          <select id="district">
                                            <option className="custom-select" value="dhaka" selected>Dhaka</option>
                                            <option value="ctg">Chittagong</option>
                                            <option value="cumilla">Cumilla</option>
                                            <option value="khalna">Khulna</option>
                                            <option value="barishal">Barishal</option>
                                            <option value="rajshahi">Rajshahi</option>
                                            <option value="chandpur">Chandpur</option>
                                        </select>
                                      </div>
                                      <div className="col-lg-12">
                                          <label htmlFor="cun">Country<span>*</span></label>
                                          <input type="text" id="cun"/>
                                      </div>
                                      <div className="col-lg-12">
                                          <label htmlFor="street">Street Address<span>*</span></label>
                                          <input type="text" id="street" placeholder="House number and steet name" className="street-first"/>
                                      </div>
                                      <div className="col-lg-12">
                                          <label htmlFor="email">Email Address (Optional)</label>
                                          <input type="text" id="email"/>
                                      </div>
                                      <div className="col-lg-12">
                                          <label htmlFor="phone">Phone<span>*</span></label>
                                          <input type="text" id="phone"/>
                                      </div>
                                      <div className="col-lg-6">
                                          <label htmlFor="town">Town / City<span>*</span></label>
                                          <input type="text" id="town"/>
                                      </div>
                                      <div className="col-lg-6">
                                          <label htmlFor="zip">Postcode / ZIP (optional)</label>
                                          <input type="text" id="zip"/>
                                      </div>
                                      <div className="col-lg-12">
                                          <p className="checkout-info-msg">For a better experience and order history, create an account with us.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="checkout-gift-address d-none d-lg-block">
                              <input type="checkbox" className="custom-control-input" id="defaultUnchecked"/>
                              <a className="content-btn" data-toggle="collapse" href="#multiCollapseExamplegift" role="button" aria-expanded="false" aria-controls="multiCollapseExamplegift">Create an account? <span>Click Here</span></a>
                              <div className="row">
                                  <div className="col">
                                      <div className="collapse gift-collapse-down-area" id="multiCollapseExamplegift">
                                          <div className="card card-body collapse-down-area-content">
                                              <div className="checkout-account-info">
                                                  <form action="#">
                                                      <label htmlFor="pass">Create account password<span>*</span></label>
                                                      <input type="password" className="form-control" required/>
                                                      <a href="/"><button className="createBtn-round" type="button "> Create</button></a>
                                                  </form>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="button-checkoutpage d-none d-lg-block">
                              <a href="/cart" className="button">Back to cart</a>
                          </div>
                      </div>

                      <div className="col-lg-6">
                          <div className="place-order ">
                              <h4>Your Order</h4>
                              <div className="order-total ">
                                  <ul className="order-table ">
                                      <li>Product <span>Total</span></li>
                                      <li className="fw-normal ">Hairpack * 2 <span>৳ 120.00</span></li>
                                      <li className="fw-normal ">Hair Gel * 1 <span>৳ 140.00</span></li>
                                      <li className="fw-normal ">Subtotal <span>৳ 260.00</span></li>
                                      <li className="total-price ">Total (included 10% VAT) <span>৳ 286.00</span></li>
                                  </ul>

                                  <div className="payment-methods">
                                      <div className="methods-title">
                                          <h5>Payment Methods</h5>
                                      </div>

                                      <div className="form-group  input-container">
                                          <div id="accordion8">
                                              <div className="card single-card-payment" data-toggle="collapse" data-target="#collapseeight" aria-expanded="true" aria-controls="collapseeight">
                                                  <div className="card-header" id="headingeight">
                                                      <h5 className="mb-0">
                                                          <div className="custom-control custom-radio " data-toggle="collapse" data-target="#collapseeight" aria-expanded="true" aria-controls="collapseeight">
                                                              <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input"/>
                                                              <label className="custom-control-label" htmlFor="customRadioInline1">Bank Transfer</label>
                                                          </div>
                                                      </h5>
                                                  </div>

                                                  <div id="collapseeight" className="collapse" aria-labelledby="headingeight" data-parent="#accordion8">
                                                      <div className="card-body">
                                                          <img src="img/payment/ssl.png" alt=""/>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="card single-card-payment" data-toggle="collapse" data-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">
                                                  <div className="card-header" id="headingnine">
                                                      <h5 className="mb-0">
                                                          <div className="custom-control custom-radio " data-toggle="collapse" data-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">
                                                              <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input"/>
                                                              <label className="custom-control-label" htmlFor="customRadioInline2">Paypal</label>
                                                          </div>
                                                      </h5>
                                                  </div>
                                                  <div id="collapsenine" className="collapse" aria-labelledby="headingnine" data-parent="#accordion8">
                                                      <div className="card-body">
                                                          <img src="img/payment/paypal.png" alt=""/>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="card single-card-payment" data-toggle="collapse" data-target="#collapseten" aria-expanded="false" aria-controls="collapseten">
                                                  <div className="card-header" id="headingten">
                                                      <h5 className="mb-0">
                                                          <div className="custom-control custom-radio " data-toggle="collapse" data-target="#collapseten" aria-expanded="false" aria-controls="collapseten">
                                                              <input type="radio" id="customRadioInline3" name="customRadioInline1" className="custom-control-input"/>
                                                              <label className="custom-control-label" htmlFor="customRadioInline3">Bkash</label>
                                                          </div>
                                                      </h5>
                                                  </div>
                                                  <div id="collapseten" className="collapse" aria-labelledby="headingten" data-parent="#accordion8">
                                                      <div className="card-body">
                                                          <img src="img/payment/bkash.png" alt=""/>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="card single-card-payment" data-toggle="collapse" data-target="#collapseeleven" aria-expanded="false" aria-controls="collapseeleven">
                                                  <div className="card-header" id="headingeleven">
                                                      <h5 className="mb-0">
                                                          <div className="custom-control custom-radio " data-toggle="collapse" data-target="#collapseeleven" aria-expanded="false" aria-controls="collapseeleven">
                                                              <input type="radio" id="customRadioInline4" name="customRadioInline1" className="custom-control-input"/>
                                                              <label className="custom-control-label" htmlFor="customRadioInline4">Cash On Delivery</label>
                                                          </div>
                                                      </h5>
                                                  </div>
                                                  <div id="collapseeleven" className="collapse" aria-labelledby="headingeleven" data-parent="#accordion8">
                                                      <div className="card-body">
                                                          <p>Please complete payment to process your courier order</p>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="order-btn ">
                                      <a href="thankyou.html" className="button button-round btn-transparent"> Place Order</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="checkout-gift-address m-0 d-lg-none">
                      <input type="checkbox" className="custom-control-input" id="checkout-gift"/>
                      <a className="content-btn" data-toggle="collapse" href="#multiCollapseExamplegift" role="button" aria-expanded="false" aria-controls="multiCollapseExamplegift">Create an account? <span>Click Here</span></a>
                      <div className="row">
                          <div className="col">
                              <div className="collapse gift-collapse-down-area" id="multiCollapseExamplegift">
                                  <div className="card card-body collapse-down-area-content">
                                      <div className="checkout-account-info">
                                          <form action="#">
                                              <label htmlFor="pass">Create account password<span>*</span></label>
                                              <input type="password" className="form-control" required/>
                                              <a href="/"><button className="createBtn-round" type="button "> Create</button></a>
                                          </form>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="button-checkoutpage mt-4 d-lg-none">
                      <a href="/cart" className="button">Back to cart</a>
                  </div>
              </form>
          </div>
      </section>
    )
  }
}
export default Checkout;