import React, { Component } from 'react';

class Hero extends Component {

  render() {
    return (
        <div className="section bg-gradient">
            <div className="container">
                <div className="call-to-action">

                    <div className="box-icon"><span className="ti-mobile gradient-fill ti-3x"></span></div>
                    <h2>Hero box</h2>
                    <p className="tagline">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. </p>
                    <div className="my-4">

                        <a href="#" class="btn btn-light">LEARN MORE</a>
                    </div>
                    <p className="text-primary"><small><i>*Lorem ipsum dolor sit amet, consectetur adipiscing elit. </i></small></p>
                </div>
            </div>
        </div>
    );
  }
}

export default Hero;