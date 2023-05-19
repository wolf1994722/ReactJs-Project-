import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NewsItem extends Component {
  render() {
    let { title, desc, imageUrl, newsUrl, publishedAt, author, source } = this.props
    return (
      <>
        <div
          style={{ width: "auto" }}
          className="card my-3"
        >
          <img
            src={imageUrl ? imageUrl : 'https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg'}
            className="card-img-top"
            style={{ maxHeight: '180px', objectFit: 'cover' }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title mb-1">
              {title}...
            </h5>
            <span class="badge mb-1 text-bg-info text-white">
              {!source ? "🐹" : source}
            </span>
            <p className="card-text">{desc}...</p>
            <p class="card-text">
              <small class="text-body-secondary">
                By {!author ? "🙋‍♂️" : author} at {new Date(publishedAt).toLocaleString()}
              </small>
            </p>
            <Link
              to={newsUrl}
              target='_blank'
              className="btn btn-sm btn-dark">
              Read More
            </Link>
          </div>
        </div>

      </>
    )
  }
}

export default NewsItem
