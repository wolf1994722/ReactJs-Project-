import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super()
    console.log('vishal item')
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  componentDidMount() {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=05965c30cda940f4a391569e716b4bed&page=${this.state.page}&pageSize=18`)
        const data = await res.json()
        this.setState({ 
          articles: data.articles,
          totalArticle: data.totalResults
        })
      } catch (error) { console.log('custom error' + error) }
    }
    fetchData();
    this.setState({ loading: true })

  }

  incrementPage = async () => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=05965c30cda940f4a391569e716b4bed&page=${this.state.page + 1}&pageSize=18`)
        const data = await res.json()
        this.setState({
          page: this.state.page + 1,
          articles: data.articles
        })
      } catch (error) { console.log('custom error' + error) }
    }
    fetchData();
  }

  decrementPage = async () => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=05965c30cda940f4a391569e716b4bed&page=${this.state.page - 1}&pageSize=18`)
        const data = await res.json()
        this.setState({
          page: this.state.page - 1,
          articles: data.articles
        })
      } catch (error) { console.log('custom error' + error) }
    }
    fetchData();
  }

  render() {

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
                    title={item.title ? item.title.substring(0, 50) : ''}
                    desc={item.description ? item.description.substring(0, 150) : ''}
                    newsUrl={item.url}
                  />
                </div>
              )
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-dark"
              disabled={this.state.page <= 1}
              onClick={this.decrementPage}
            >
              ⏮ Prev
            </button>
            <button
              type="button"
              className="btn btn-dark"
              disabled={this.state.page >= Math.ceil(this.state.totalArticle/18)}
              onClick={this.incrementPage}
            >
              Next ⏭
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default News
