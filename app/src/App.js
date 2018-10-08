import React, { Component } from 'react';
import { Route, Switch } from "react-router";
import { NavLink } from 'react-router-dom'

import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import NewsPage from './components/NewsPage';
import News from './components/News';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <main className="App-content">
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/news" exact component={NewsPage} />
            <Route path="/news/:id" component={News} />
          </Switch>
        </main>
        <Footer />
      </div >
    );
  }
}

const Header = () => {
  return (
    <header className="bg-gradient" id="home">
        <div className="container mt-5 pb-5">
            <h1>Website</h1>
            <p className="tagline">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. </p>
        </div>
    </header>
  );
}

const Nav = () => {
  return (
    <div className="nav-menu fixed-top">
      <div className="container">
          <div className="row">
              <div className="col-md-12">
                  <nav className="navbar navbar-dark navbar-expand-lg">
                      <a className="navbar-brand" href="/"><img src="images/logo.png" className="img-fluid" alt="logo"></img></a> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                      <div className="collapse navbar-collapse" id="navbar">
                          <ul className="navbar-nav ml-auto">
                              <li className="nav-item"><NavLink className="nav-link" activeClassName="active" exact to="/">HOME</NavLink></li>
                              <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/news">NEWS</NavLink></li>
                              <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/about">ABOUT</NavLink></li>
                              <li className="nav-item"><a href="#" className="btn btn-outline-light my-3 my-sm-0 ml-lg-3">GO</a></li>
                          </ul>
                      </div>
                  </nav>
              </div>
          </div>
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="my-5 text-center">
        <p className="mb-2"><small>COPYRIGHT © 2018. ALL RIGHTS RESERVED. MOBAPP TEMPLATE BY <a href="https://colorlib.com">COLORLIB</a></small></p>

        <small>
            <a href="#" className="m-2">PRESS</a>
            <a href="#" className="m-2">TERMS</a>
            <a href="#" className="m-2">PRIVACY</a>
        </small>
    </footer>
  );
}

export default App;
