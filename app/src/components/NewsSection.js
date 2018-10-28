import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { CONSTANTS } from '../shared/Constants'

class NewsSection extends Component {

  render() {
    return (
        <React.Fragment>
          <Body />
        </React.Fragment>
    );
  }
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
        There are many vocabularies and OWL representations which are being produced about agronomic data for the last few years.
        However, there are so many data sources that are spread out that stored in different formats and standards. 
        Therefore, the objective of this project is to create a common platform that stores information in which different standards 
        follow the principles of Linked Open Data. These principles support the use of standards (RDF) and vocabularies (SKOS). 
        The data model that was used correspond to an OWL representation very accepted by the scientific community in the agronomic domain.
        </p>
      </div>
    </header> 
  );
}

export default NewsSection;
