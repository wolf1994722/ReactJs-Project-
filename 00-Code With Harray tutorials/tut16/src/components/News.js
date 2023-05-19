import React, { Component } from 'react'
import NewsItem from './NewsItem'
import datas from '../data.json'

export class News extends Component {
  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className='my-4'>🐵 NewsMonkey Top Headlines 🔥</h2>
          <div className="row">

            {datas.articles.map((item) => {
              return (
                <div className="col-md-4">
                  <NewsItem
                    imageUrl={item.urlToImage}
                    title={item.title.substring(0, 50)}
                    desc={item.description.substring(0, 150)}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </>
    )
  }
}

export default News
