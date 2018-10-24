import React, { Component } from 'react';

import NewsSection from './NewsSection';
import ClientsLogos from './ClientsLogos';

class LandingPage extends Component {

  render() {
    return (
        <React.Fragment>
          <Header />
          <NewsSection />
        </React.Fragment>
    );
  }
}

const Header = () => {
  return (
    <header className="text-center text-white">
      <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
          <source src="assets/videos/field.mp4" type="video/mp4"></source>
      </video>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">AgroPortal</h1>
            <p className="lead">
              The website of this project trying to satisfy the needs of the agronomy community. 
            </p>
            <img src="assets/images/logos/khaos.png" alt="logo" className="img-fluid" style={{height: 180 + "px"}}/>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <ClientsLogos />
      </div>
    </header>
  );
}

export default LandingPage;