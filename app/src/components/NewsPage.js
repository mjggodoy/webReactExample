import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { CONSTANTS } from '../shared/Constants'

class NewsPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      news: []
    }
  }

  async componentDidMount() {
    let response = await fetch(`${CONSTANTS.API.url}/news`);
    if (!response.ok) {
      return
    }

    let data = await response.json()
    this.setState({ loading: false, news: data.reverse() })
  }

  render() {
    if (!this.state.loading) {
      return (
        <div className="section">
          <div className="container">
              <div className="section-title">
                  <small>News</small>
                  <h3>Lastest news</h3>
              </div>

              <div className="row pt-4">
                  <div className="col-md-6">
                      {this.state.news.map((news, index) => {
                        return (
                          <div className="mb-5" key={news.id}>
                            <h4 className="mb-3"><span class="ti-angle-double-right mr-2"></span>{news.fulltitle}</h4>
                            <Link className="btn" to={`/news/${news.id}`}>Keep reading</Link>
                          </div>
                        );
                      })}
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

export default NewsPage;
