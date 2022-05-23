import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div className="login-page">
          <div className="container">
              <h3 className="login-head">Welcome, Please sign in!</h3>
              <div className="row">
                  <div id="login-forms">
                      <form className="form-signin">
                          <div className="login-form-heading">
                              <p>Login with username & password</p>
                          </div>
                          <div className="social-login">
                              <button className="btn facebook-btn social-btn" type="button"><span><i className="fa fa-facebook"></i> Sign in with Facebook</span> </button>
                              <button className="btn google-btn social-btn" type="button"><span><i className="fa fa-google"></i> Sign in with Google</span> </button>
                          </div>
                          <p className='text-center'> OR </p>
                          <div className="login-required-field">
                              <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required/>
                              <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                          </div>
                          <button className="button button-sqr btn-block" type="submit"><i className="fa fa-sign-in" aria-hidden="true"></i> Sign in</button>
                          <a href="passwordrecovery.html" className="forgot-password-link">Forgot password?</a>
                          <a href="registration.html"><button className="button button-sqr btn-bg btn-block" type="button" id="btn-signup"><i className="fa fa-user-plus"></i> Sign up New Account</button></a>
                      </form>
                      <br/>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
export default Login;