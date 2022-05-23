import React, { Component } from 'react'

class Registration extends Component {
  render() {
    return (
      <section className="registration-page py-3 py-md-0">
                <div className="container">
                    <h3 className="register-head">Register</h3>
                    <div className="card registration-card my-4">
                        <div className="row no-gutters">
                            <div className="col-lg-6">
                                <div className="registration-card-img">
                                    <img src="assets/img/registration2.jpg" alt="registration"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-lg-offset-1">
                                <h3 className="register-head d-lg-none ">Register</h3>
                                <div className="card-body registration-information">
                                    <div className="registration-card-description">
                                        <p>For registration please fillup the required field</p>
                                    </div>
                                    <form>
                                        <div className="social-login">
                                            <button className="btn facebook-btn social-btn mr-2" type="button"><span><i className="fa fa-facebook"></i> Sign in with Facebook</span> </button>
                                            <button className="btn google-btn social-btn" type="button"><span><i className="fa fa-google"></i> Sign in with Google</span> </button>
                                        </div>
                                        <p className='text-center'> OR </p>
                                        <div className="registration-page-registration-form">
                                            <div className="form-group reg-input-title">
                                                <label htmlFor="first">First Name<span>*</span></label>
                                                <div className="col-lg-12 col-sm-12 contact">
                                                    <input type="text " className="form-control " id="fname " placeholder="Enter First Name " name="fname"/>
                                                </div>
                                            </div>
                                            <div className="form-group reg-input-title">
                                                <label htmlFor="last">Last Name<span>*</span></label>
                                                <div className="col-lg-12 col-sm-12 contact">
                                                    <input type="text " className="form-control " id="fname " placeholder="Enter Last Name " name="lname"/>
                                                </div>
                                            </div>
                                            <div className="form-group reg-input-title">
                                                <label htmlFor="email ">Email<span>*</span></label>
                                                <div className="col-sm-12 ">
                                                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
                                                </div>
                                            </div>
                                            <div className="form-group reg-input-title">
                                                <label htmlFor="number">Phone Number<span>*</span></label>
                                                <div className="col-sm-12">
                                                    <input type="text" className="form-control" id="phone" placeholder="Enter phone number" name="phone"/>
                                                </div>
                                            </div>
                                            <div className="form-group reg-input-title">
                                                <label htmlFor="password ">Password<span>*</span></label>
                                                <div className="col-sm-12 ">
                                                    <input type="password" className="form-control" id="password" placeholder="Enter secret number" name="password"/>
                                                </div>
                                            </div>
                                            <div className="form-group reg-input-title">
                                                <label htmlFor="password ">Confirm Password<span>*</span></label>
                                                <div className="col-sm-12 ">
                                                    <input type="password" className="form-control" id="password" placeholder="Enter secret number" name="password"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className=" col-sm-12 mt-2">
                                                    <a href="/" className="button button-sqr btn-bg text-center" type="submit"><i className="fa fa-sign-in" aria-hidden="true"></i> Register</a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <div className="registration-card-footer-text mt-4">
                                        <p>Already have an account? <a href="/login">SignIn</a></p>
                                    </div>
                                    <nav className="registration-card-footer-nav">
                                        <a href="/terms">Terms & Privacy policy.</a>

                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
  }
}
export default Registration;
