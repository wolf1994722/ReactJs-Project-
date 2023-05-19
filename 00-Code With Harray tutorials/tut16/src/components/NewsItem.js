import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NewsItem extends Component {
  render() {
    let { title, desc, imageUrl } = this.props
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">{desc}..</p>
            <Link
              to={"/newsDetail"}
              className="btn btn-primary">
              Click
            </Link>
          </div>
        </div>

      </>
    )
  }
}

export default NewsItem
