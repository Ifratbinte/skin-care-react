import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <div className="footer-contact">
                                <img src="img/footer-logo.png" alt=""/>
                                <p className="mt-2">
                                    Holding #373 Elephant Road, <br/> Dhaka 1205<br/><br/>
                                    <strong>Phone:</strong> +880 1701290756<br>
                                    <strong>Email:</strong> info@domain.com<br>
                                </p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="fa fa-chevron-right"></i> <a href="about.html">About us</a></li>
                                <li><i className="fa fa-chevron-right"></i> <a href="blog.html">Blog</a></li>
                                <li><i className="fa fa-chevron-right"></i> <a href="contact.html">Contact Us</a></li>
                                <li><i className="fa fa-chevron-right"></i> <a href="terms.html">Terms & Privacy</a></li>
                                <li><i className="fa fa-chevron-right"></i> <a href="faq.html">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="fa fa-chevron-right"></i> <a href="#">Purlar Managment</a></li>
                                <li><i className="fa fa-chevron-right"></i> <a href="#">Web Development</a></li>
                                <li><i className="fa fa-chevron-right"></i> <a href="#">Product Management</a></li>
                                <li><i className="fa fa-chevron-right"></i> <a href="#">Marketing</a></li>
                                <li><i className="fa fa-chevron-right"></i> <a href="#">Graphic Design</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 footer-newsletter">
                            <h4>Join Our Newsletter</h4>
                            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                            <form action="" method="post">
                                <input type="email" name="email" placeholder="Enter email address"/>
                                <input type="submit" value="Subscribe"/>
                            </form><br/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="d-md-flex py-2">
                        <div className="mr-md-auto text-center text-md-left">
                            <div className="copyrights">
                                <strong>Copyright &copy;2022</strong>
                            </div>
                        </div>
                        <div className="social-links text-center text-md-right pt-3 pt-md-0">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fa fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
  }
}
export default Footer;
