import React, { Component } from 'react'
import NewsItem from './NewsItem'
import datas from '../data.json'

export class News extends Component {
  name = 'vishal kumar'
  constructor() {
    super()
    console.log('vishal item')
    this.state = {
      articles : datas.articles,
      name : this.name,
      loading : false
    }
  }

  render() {
    return (
      <>  
        {this.state.name} loading : {this.state.loading}
        <div className="container my-3">
          <h2 className='my-4'>🐵 NewsMonkey Top Headlines 🔥</h2>
          <div className="row">
            {this.state.articles.map((item, idx) => {
              return (
                <div className="col-md-4" key={idx}>
                  <NewsItem
                    imageUrl={item.urlToImage}
                    title={item.title.substring(0, 50)}
                    desc={item.description.substring(0, 150)}
                    newsUrl={item.url}
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
