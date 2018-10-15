import React, { Component } from 'react';

import NewsSection from './NewsSection';

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
      <div className="overlay"></div>
      <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
          <source src="assets/videos/loop.mov" type="video/mp4"></source>
      </video>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <img src="assets/images/logo.svg" alt="logo" className="img-fluid" style={{height: 180 + "px"}}/>
            <h1 className="mt-5">Website title</h1>
            <p className="lead">
              Website with <span className="underline-magical">fancy</span> description.
            </p>
            <ul className="list-unstyled">
              <li><span className="badge badge-light">One</span> Just</li>
              <li><span className="badge badge-light">Two</span> a list.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <img src="assets/images/client-logos.png" alt="client logos" className="img-fluid"/>
      </div>
    </header>
  );
}

export default LandingPage;