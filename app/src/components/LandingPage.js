import React, { Component } from 'react';
import ClientsLogos from './ClientsLogos';

class LandingPage extends Component {

  render() {
    return (
        <React.Fragment>
          <Header />
          <Body />
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


const Body = () => {
  
  return (
    <header className="text-center text-white">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
              <h1>The AgroPortal Project </h1>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <p className="lead">
        There are many vocabularies and OWL representations that are being produced about agronomic data for the last few years.
        However, there are so many data sources that are spread out and have been stored in different formats and standards. 
        Therefore, the objective of this project is to create a common platform that stores information in different standards that follow
        the principles of Open Linked Data. These principles support the use of standards (RDFs and OWLs) and vocabularies (SKOS). In this context, 
        one of the main objectives is to provide a data scheme to integrate the converted RDF agronomioc information retreived from diffetent data sources. 
        </p>
      </div>
    </header> 
  );
}

export default LandingPage;