import React, { Component } from 'react';
import { Route, Switch } from "react-router";
import { NavLink } from 'react-router-dom'

import LandingPage from './components/LandingPage';
import ContactPage from './components/ContactPage';
import Members from './components/Members';
import Research from './components/Research';



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="flex-fill">
          <Nav />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/research" exact component={Research} />
            <Route path="/contact" exact component={ContactPage} />
            <Route path="/members" exact component={Members} />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div className="container">
        <NavLink className="navbar-brand" exact to="/"></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact to="/research">Research</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact to="/members">Members</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const Footer = () => {
  return (
    <footer className="footer text-white bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
            <ul className="list-inline mb-2">
              <li className="list-inline-item">
                <NavLink exact to="/">Home</NavLink>
              </li>
              <li className="list-inline-item">&sdot;</li>
              <li className="list-inline-item">
                <NavLink exact to="/research">Research</NavLink>
              </li>
              <li className="list-inline-item">&sdot;</li>
              <li className="list-inline-item">
                <NavLink exact to="/members">Members</NavLink>
              </li>
              <li className="list-inline-item">&sdot;</li>
              <li className="list-inline-item">
                <NavLink exact to="/contact">Contact</NavLink>
              </li>
            </ul>
            <p className="text-muted small mb-4 mb-lg-0">Copyright &copy; University of Málaga. All rights reserved. Powered by <a href="http://khaos.uma.es/" target="_blank" rel="noopener noreferrer">Khaos research</a>.</p>
          </div>
          <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
            <ul className="list-inline mb-0">
              <li className="list-inline-item mr-3">
                <a href="https://twitter.com/khaosresearch?lang=es" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square fa-2x fa-fw"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
