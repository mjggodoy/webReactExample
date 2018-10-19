import React, { Component } from 'react';

class ContactPage extends Component {

  render() {
    return (
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title underline">
                        <h2>Contact us</h2>
                        </div>
                    </div>
    
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="contact-icon text-center">
                            <div className="single-icon">
                                <i className="fas fa-mobile"></i>
                                <p>
                                    D. José F. Aldana Montes<br></br>
                                    Tlf.: +35 951 95 29 18<br></br>
                                    <span>Monday-Friday (9am-12am)</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="contact-icon text-center">
                            <div className="single-icon">
                                <i className="fas fa-envelope-open"></i>
                                <p>
                                    Email: <a href="mailto:khaos@lcc.uma.es">khaos@lcc.uma.es</a><br></br>
                                    <span>Website: <a href="http://khaos.uma.es/">http://khaos.uma.es/</a></span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="contact-icon text-center">
                            <div className="single-icon">
                                <i className="fas fa-map-marker-alt"></i>
                                <p>
                                    <a href="https://www.google.com/maps/place/Arquitecto+Francisco+Pe%C3%B1alosa,+18,+29010+M%C3%A1laga/">
                                        Arquitecto Francisco Peñalosa, 18<br></br>
                                        <span>29071 Málaga</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <img src="assets/images/map.png" alt="map" class="img-fluid" style={{"box-shadow": "0px 0px 15px rgba(0, 0, 0, .05)"}}/>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default ContactPage;
