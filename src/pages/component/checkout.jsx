
import React, {useState} from 'react'

const Checkout = () => {
    const [show, setShow] = useState(false);
    
    return (
      <section className="checkout-section spad">
          <div className="container">
              <h3 className="d-block checkout-resp-head text-center pb-4">checkout</h3>
                <div className="checkout-form">
                  <div className="row">
                      <div className="col-lg-6">
                          <div className="checkout-submit-form">
                                <h5>Returning Customer? <a href="/" onClick={() => setShow(!show)}> Click here to login</a></h5>
                                {show && <div className="card card-body">
                                    <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer please proceed to the Billing &amp; Shipping section.</p>
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="email">Email address<span>*</span></label>
                                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password<span>*</span></label>
                                            <input type="password" className="form-control" id="password"/>
                                        </div>
                                        <div className="form-group form-check">
                                            <input type="checkbox" className="form-check-input" id="checkbox"/>
                                            <label className="form-check-label" htmlFor="checkbox">Remembar Me</label>
                                        </div>
                                        <button type="submit" className="button button-sqr btn-transparent">Submit</button>
                                    </form>
                                </div>}
                          </div>

                          <div className="checkout-submit-form">
                              <h5>Have a coupon? <a href="/" onClick={() => setShow(!show)}> Click here to enter your code</a></h5>
                              {show && <div className="card card-body">
                                    <form action="#">
                                        <input placeholder="Coupon code" type="text" className="form-control"/>
                                        <button type="submit" className="button button-sqr btn-transparent mt-4">Apply</button>
                                    </form>
                                </div>
                                } 
                          </div>
                          <div className="billing-section">
                              <h4>Biiling Details</h4>
                              <div className="billing-information">
                                  <div className="row">
                                      <div className="col-md-6">
                                          <label htmlFor="first">First Name<span>*</span></label>
                                          <input type="text" id="fir"/>
                                      </div>
                                      <div className="col-md-6">
                                          <label htmlFor="last">Last Name<span>*</span></label>
                                          <input type="text" id="last"/>
                                      </div>
                                      <div className="col-md-6">
                                          <label htmlFor="district">District<span>*</span></label>
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
                                      <div className="col-md-6">
                                          <label htmlFor="cun">Country<span>*</span></label>
                                          <input type="text" id="cun"/>
                                      </div>
                                      <div className="col-md-6">
                                          <label htmlFor="street">Street Address<span>*</span></label>
                                          <input type="text" id="street" placeholder="House number and steet name" className="street-first"/>
                                      </div>
                                      <div className="col-md-6">
                                          <label htmlFor="email">Email Address (Optional)</label>
                                          <input type="text" id="email"/>
                                      </div>
                                      <div className="col-md-6">
                                          <label htmlFor="phone">Phone<span>*</span></label>
                                          <input type="text" id="phone"/>
                                      </div>
                                      <div className="col-md-6">
                                          <label htmlFor="town">Town / City<span>*</span></label>
                                          <input type="text" id="town"/>
                                      </div>
                                      <div className="col-md-6">
                                          <label htmlFor="zip">Postcode / ZIP (optional)</label>
                                          <input type="text" id="zip"/>
                                      </div>
                                      <div className="col-lg-12">
                                          <p className="checkout-info-msg">For a better experience and order history, create an account with us.</p>
                                      </div>
                                  </div>
                              </div>
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
                                      <a href="/grettings" className="button button-round btn-transparent"> Place Order</a>
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
              </div>
          </div>
      </section>
    )
}
export default Checkout;