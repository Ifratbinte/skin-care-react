import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <section>
          <div className="container">
              <div className="contact-details">
                  <div className="row">
                      <div className="col-lg-12 contact-form-heading text-center">
                          <h3>Contact Us</h3>
                      </div>
                  </div>
                  <div className="row contact-details-bdr">
                      <div className="col-lg-6 col-sm-12">
                          <div className="contactpage-contact-info">
                              <div className="contact-address">
                                  <div className="contact-address-title d-flex">
                                      <i className="fa fa-map-marker"></i>
                                      <h5>Address</h5>
                                  </div>
                                  <div className="contact-address-info">
                                      <p>211 Lakewood Dr, USA</p>
                                  </div>
                              </div>
                              <div className="contact-address">
                                  <div className="contact-address-title d-flex">
                                      <i className="fa fa-phone"></i>
                                      <h5>Hotline</h5>
                                  </div>
                                  <div className="contact-address-info">
                                      <p> +00 879 567 0092 </p>
                                  </div>
                              </div>
                              <div className="contact-address">
                                  <div className="contact-address-title d-flex">
                                      <i className="fa fa-envelope"></i>
                                      <h5>General Support</h5>
                                  </div>
                                  <div className="contact-address-info">
                                      <p> info@domain.com </p>
                                  </div>
                              </div>
                          </div>
                          <div className="map-content">
                              <div className="mapouter">
                                  <div className="gmap_canvas">
                                      <iframe className="map-iframe" height="515" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=700&amp;height=515&amp;hl=en&amp;q=211 Lakewood Drive&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6 col-sm 12 contact-page-information">
                          <div className="row">
                              <div className="col-lg-12">
                                  <div className="contact-title">
                                      <p>For all enquries, please email us using the form below.</p>
                                  </div>
                              </div>
                          </div>

                          <div className="row">
                              <div className="col-lg-12 col-sm-12">
                                  <div className="contact-form">

                                      <div className="form-group input-title">
                                          <label htmlFor="first">First Name<span>*</span></label>
                                          <div className="col-lg-12 col-sm-12 contact">
                                              <input type="text " className="form-control" id="fname" placeholder="Enter First Name " name="fname"/>
                                          </div>
                                      </div>
                                      <div className="form-group input-title">
                                          <label htmlFor="last">Last Name<span>*</span></label>
                                          <div className="col-lg-12 col-sm-12 contact">
                                              <input type="text " className="form-control" id="lname" placeholder="Enter Last Name " name="lname"/>
                                          </div>
                                      </div>
                                      <div className="form-group input-title">
                                          <label htmlFor="email ">Email<span>*</span></label>
                                          <div className="col-sm-12 ">
                                              <input type="email " className="form-control" id="email" placeholder="Enter email " name="email"/>
                                          </div>
                                      </div>
                                      <div className="form-group input-title">
                                          <label htmlFor="number ">Phone Number<span>*</span></label>
                                          <div className="col-sm-12 ">
                                              <input type="text" className="form-control" id="phone" placeholder="Enter phone number " name="phone"/>
                                          </div>
                                      </div>
                                      <div className="form-group input-title">
                                          <label htmlFor="comment ">Message<span>*</span></label>
                                          <div className="col-sm-12 ">
                                              <textarea className="form-control" rows="5 " id="comment" placeholder="Write Something.."></textarea>
                                          </div>
                                      </div>
                                      <div className="google-chapcha">
                                          <div className="col-lg-6">
                                              <div className="g-recaptcha" id="rcaptcha" data-sitekey="site key"></div>
                                              <span id="captcha" style={{color:'red'}} ></span>
                                          </div>
                                      </div>
                                      <div className="form-group ">
                                          <div className="col-sm-12 mt-2 text-right">
                                              <a href="/"><button className="button button-round btn-transparent">Submit</button></a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}
export default Contact;