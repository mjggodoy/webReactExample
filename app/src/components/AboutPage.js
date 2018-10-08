import React, { Component } from 'react';

class AboutPage extends Component {

  render() {
    return (
        <div className="section">
            <div className="container">
                <div className="section-title">
                    <small>About</small>
                    <h3>Who we are</h3>
                </div>

                <div className="row pt-4">
                    <div className="col-md-6">
                        <p className="light-font mb-5">About page.</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default AboutPage;
