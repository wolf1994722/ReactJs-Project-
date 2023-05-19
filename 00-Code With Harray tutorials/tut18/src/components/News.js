import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = []
  constructor() {
    super()
    console.log('vishal item')
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  componentDidMount() {
    console.log('did mount')
    const fetchData = async () => {
      try {
        const res = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=05965c30cda940f4a391569e716b4bed')
        const data = await res.json()
        this.setState({ articles: data.articles })
      } catch (error) { console.log('custom error' + error) }
    }
    fetchData();
    this.setState({ loading: true })
  }

  render() {
    console.log('render')
    return (
      <>
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
