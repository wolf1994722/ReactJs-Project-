import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export class News extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      loading: true, 
      page: 1
    }
  }

  componentDidMount() {
    const fetchData = async () => {
      try {
        this.setState({ loading: true, })
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`)
        const data = await res.json()
        this.setState({
          articles: data.articles,
          totalArticle: data.totalResults,
          loading : false
        })
      } catch (error) { console.log('custom error' + error) }
    }
    fetchData();
    this.setState({ loading: false })
  }

  incrementPage = async () => {
    const fetchData = async () => {
      try {
        this.setState({
          loading: true,
        })
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`)
        const data = await res.json()
        this.setState({
          page: this.state.page + 1,
          articles: data.articles,
          loading: false
        })
      } catch (error) { console.log('custom error' + error) }
    }
    fetchData();
  }

  decrementPage = async () => {
    const fetchData = async () => {
      try {
        this.setState({
          loading: true,
        })
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`)
        const data = await res.json()
        this.setState({
          page: this.state.page - 1,
          articles: data.articles,
          loading: false
        })
      } catch (error) { console.log('custom error' + error) }
    }
    fetchData();
  }

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className='my-4 text-center'>🐵 NewsMonkey Top Headlines 🔥</h2>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading && this.state.articles.map((item, idx) => {
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
              disabled={this.state.page >= Math.ceil(this.state.totalArticle / this.props.pageSize)}
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
