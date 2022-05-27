import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
        <section className='contact-page'>
            <div className="container">
                <div className="contact-details card-shadow">
                    <div className="row">
                        <div className="col-md-6">
                                {/* <div className="contactpage-contact-info">
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
                            </div> */}
                            <div className="gmap_canvas">
                                <iframe title="g-map" className="map-iframe" height="490" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=700&amp;height=515&amp;hl=en&amp;q=211 Lakewood Drive&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-title mb-4">
                                <h3>Get In Touch</h3>
                                <p>For all enquries, please email us using the form below.</p>
                            </div>

                            <form action="#">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="first">First Name<span>*</span></label>
                                        <input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="last">Last Name<span>*</span></label>
                                        <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="email">Email<span>*</span></label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="number ">Phone Number<span>*</span></label>
                                        <input type="text" className="form-control" id="phone" placeholder="Enter phone number" name="phone"/>
                                    </div>
                                    <div className="form-group col-12">
                                        <label htmlFor="comment">Message<span>*</span></label>
                                        <textarea className="form-control" rows="5 " id="comment" placeholder="Write Something.."></textarea>
                                    </div>
                                </div>
                                <button className="button button-sqr btn-bg mt-2" type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                 </div>
            </div>
        </section>
    )
  }
}
export default Contact;