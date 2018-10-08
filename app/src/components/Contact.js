import React, { Component } from 'react';

class Contact extends Component {

  render() {
    return (
        <div className="light-bg py-5" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-center text-lg-left">
                        <p className="mb-2"> <span className="ti-location-pin mr-2"></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className=" d-block d-sm-inline-block">
                            <p className="mb-2">
                                <span className="ti-email mr-2"></span> <a className="mr-4" href="mailto:support@dev.com">support@dev.com</a>
                            </p>
                        </div>
                        <div className="d-block d-sm-inline-block">
                            <p className="mb-0">
                                <span className="ti-headphone-alt mr-2"></span> <a href="tel:123456">1-234-56</a>
                            </p>
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div className="social-icons">
                            <a href="#"><span className="ti-facebook"></span></a>
                            <a href="#"><span className="ti-twitter-alt"></span></a>
                            <a href="#"><span className="ti-instagram"></span></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
  }
}

export default Contact;