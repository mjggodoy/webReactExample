import React, { Component } from 'react';

import Clients from './Clients';
import Hero from './Hero';
import FAQ from './FAQ';
import Contact from './Contact';

class LandingPage extends Component {

  render() {
    return (
        <div>
            <Clients />
            <FAQ />
            <Hero />
            <Contact />
        </div>
    );
  }
}

export default LandingPage;