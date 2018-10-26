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
    
                    <div className="col-md-6 col-sm-6 col-xs-12">
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

                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="contact-icon text-center">
                            <div className="single-icon">
                                <i className="fas fa-envelope-open"></i>
                                <p>
                                    Email: <a href="mailto:khaos@lcc.uma.es">khaos@lcc.uma.es</a><br></br>
                                    <span>Website: <a href="http://khaos.uma.es/" target="_blank">http://khaos.uma.es/</a></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <h2>You can find me here (Lab 2.1)...</h2>
                        <iframe style = {mapWidth} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.2412858181724!2d-4.501883684986103!3d36.71676597996586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f0bfc5c081c1%3A0x7752863777569384!2sEdificio+de+I%2BD+Ada+Byron!5e0!3m2!1ses!2ses!4v1540559255930"></iframe>
                        <br/>
                        <h2>Or here (Room 3.2.5 in E.T.S.I)...</h2>
                        <iframe style = {mapWidth} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.3091284254992!2d-4.479836684986229!3d36.71513637996622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f74b9f3606f1%3A0x9fa32cc2e6b0bbf9!2sE.T.S.+Ingenier%C3%ADa+Inform%C3%A1tica.+Universidad+de+M%C3%A1laga!5e0!3m2!1ses!2ses!4v1540560277715"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

const mapWidth = {
    width:"100%",
    height:"350px",
    frameborder:"0",
    scrolling:"no",
    marginheight:"0",
    marginwidth:"0",
}

export default ContactPage;
