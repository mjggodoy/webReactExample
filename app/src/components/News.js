import React, { Component } from 'react';
import { CONSTANTS } from '../shared/Constants'

class News extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      news: []
    }
  }

  async componentDidMount() {
    let response = await fetch(`${CONSTANTS.API.url}/news/${this.props.match.params.id}`)
    let data = await response.json()
    
    this.setState({
      loading: false,
      news: data
    })
  }

  render() {
    if (!this.state.loading) {
      return (
        <div className="section">
          <div className="container">
              <div className="section-title">
                  <small><span class="ti-id-badge mr-2"></span>{this.state.news.author} <span class="ti-alarm-clock mr-2"></span>{this.state.news.date}</small>
                  <h3 class="mb-3">{this.state.news.fulltitle}</h3>
              </div>

              <div className="row pt-4">
                  <div className="col-md-6">
                      <p className="light-font mb-5">{this.state.news.body}</p>
                  </div>
              </div>
          </div>
        </div>
      );
    }

    return (
      <div className="section">
          <div className="container">
              <div className="section-title">
                  <h2>Loading...</h2>
              </div>
          </div>
      </div>
    );
  }
}

export default News;