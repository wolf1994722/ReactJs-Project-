import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: 'in',
    apiKey: '05965c30cda940f4a391569e716b4bed',
    pageSize: 18,
    category: 'general',
    headline: ''
  }

  static propTypes = {
    country: PropTypes.string, //* pstr
    apiKey: PropTypes.string,
    pageSize: PropTypes.number, //* pnr
    category: PropTypes.string,
    headline: PropTypes.string,
  }

  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalArticle: 0
    }
    document.title = `${this.capatilizeStr(this.props.category)}`
  }

  updateNews = async (pageNumber) => {
    this.setState({ loading: true, })
    const fetchData = async () => {
      try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${pageNumber}&pageSize=${this.props.pageSize}`)
        const data = await res.json()
        this.setState({
          page: pageNumber,
          articles: data.articles,
          totalArticle: data.totalResults,
          loading: false
        })
      } catch (error) { console.log('custom error' + error) }
    }
    await fetchData();
    this.setState({ loading: false })
  }

  async componentDidMount() {
    this.updateNews(1);
  }

  capatilizeStr = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  fetchMore = async () => {
    this.setState({
      page: this.state.page + 1,
      loading: true,
    })
    const fetchData = async () => {
      try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`)
        const data = await res.json()
        this.setState({
          page: this.state.page,
          articles: this.state.articles.concat(data.articles),
          totalArticle: data.totalResults,
          loading: false
        })
      } catch (error) { console.log('custom error' + error) }
    }
    await fetchData();
    this.setState({ loading: false, })
  }

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className='my-4 text-center'>🐵 NewsMonkey Top {this.capatilizeStr(this.props.headline)} Headlines 🔥</h2>

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMore}
            hasMore={this.state.articles.length <= this.state.totalArticle}
            loader={<Spinner />}
          >

            <div className="container">
            <div className="row">
              {this.state.articles.map((item, idx) => {
                return (
                  <div className="col-md-4" key={idx}>
                    <NewsItem
                      imageUrl={item.urlToImage ? item.urlToImage : 'https://images.pexels.com/photos/361104/pexels-photo-361104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                      title={item.title ? item.title.substring(0, 100) : ''}
                      desc={item.description ? item.description.substring(0, 150) : ''}
                      newsUrl={item.url}
                      publishedAt={item.publishedAt}
                      author={item.author}
                      source={item.source.name}
                    />
                  </div>
                )
              })}
            </div>
            </div>
          </InfiniteScroll>

        </div>
      </>
    )
  }
}

export default News
