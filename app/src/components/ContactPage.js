import React, { Component } from 'react';

class ContactPage extends Component {

  render() {
    return (
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title underline">
                        <h2>Contáctanos</h2>
                        </div>
                    </div>
    
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="contact-icon text-center">
                            <div className="single-icon">
                                <i className="fas fa-mobile"></i>
                                <p>
                                    Teléfono: +1 5589 55488 55<br></br>
                                    <span>Lunes-Viernes (9am-12am)</span>
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
                                    <span>Web: <a href="http://khaos.uma.es/">http://khaos.uma.es/</a></span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="contact-icon text-center">
                            <div className="single-icon">
                                <i className="fas fa-map-marker-alt"></i>
                                <p>
                                    A108 Adam Street<br></br>
                                    <span>NY 535022, USA</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default ContactPage;
