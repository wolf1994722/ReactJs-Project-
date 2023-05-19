import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NewsItem extends Component {
  render() {
    let { title, desc, imageUrl, newsUrl } = this.props
    return (
      <>
        <div
          style={{ width: "auto" }}
          className="card my-3"
        >
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">{desc}..</p>
            <Link
              to={"/newsDetail"}
              className="btn btn-sm btn-primary">
              Read More
            </Link>
          </div>
        </div>

      </>
    )
  }
}

export default NewsItem
