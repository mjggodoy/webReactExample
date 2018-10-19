import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
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
    fetch(`http://${CONSTANTS.API.url}/news/${this.props.match.params.id}`)
      .then((response) => {
        return response.json()
      })
      .then((news) => {
        this.setState({
          loading: false,
          news: news
        })
      })
  }

  render() {
    if (!this.state.loading) {
      const date = new Date(this.state.news.createdAt);

      return (
        <section className="news bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title underline">
                  <h2>{this.state.news.fulltitle}</h2>
                  <small>Published on {date.getFullYear()}-{date.getMonth() + 1}-{date.getDay()}</small>
                </div>
              </div>
              
              <div className="col-md-12">
                <div className="main-post">    
                  <ReactMarkdown source={this.state.news.body} />
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    return (
      <section className="news">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2>Loading news...</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default News;