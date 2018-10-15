import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { CONSTANTS } from '../shared/Constants'

class NewsSection extends Component {

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
        <section className="news">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title underline">
                  <h2>Lastest news</h2>
                </div>
              </div>

              {
                this.state.news.map((news) => {
                  // map content to html elements
                  const date = new Date(news.createdAt)

                  return (
                    <div className="col-md-4">
                      <div className="post">
                        <Link className="post-img" to={`/news/${news.id}`}>
                          {
                            !news.header ?            
                              <img src="assets/images/default_header.jpg" alt="default"></img> :
                              <img src={CONSTANTS.API.url + news.header.url} alt={news.header.name}></img>
                          }
                        </Link>
                        <div className="post-body">
                          <div className="post-meta">
                            <span className="post-date">
                              <i className="far fa-calendar-alt"></i>
                              &nbsp;Published on {date.getFullYear()}-{date.getMonth() + 1}-{date.getDay()}
                            </span>
                          </div>
                          <h3 className="post-title"><Link to={`/news/${news.id}`}>{news.title}</Link></h3>
                        </div>
                      </div>
                    </div>
                  );
                })
              }

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

export default NewsSection;
