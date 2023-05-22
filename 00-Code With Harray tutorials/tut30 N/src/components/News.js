import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types'

function News(props) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalArticle, setTotalArticle] = useState(0)

  const updateNews = async (pageNumber) => {
    console.log(props)
    props.setProgress(10)
    setLoading(true)
    props.setProgress(20)
    const fetchData = async () => {
      try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageNumber}&pageSize=${props.pageSize}`)
        const data = await res.json()
        setPage(pageNumber)
        setArticles(data.articles)
        setTotalArticle(data.totalResults)
      } catch (error) { console.log('custom error' + error) }
    }
    await fetchData();
    props.setProgress(90)
    setLoading(false)
    props.setProgress(100)
  }

  useEffect(() => {
    updateNews(1)
    document.title = `${capatilizeStr(props.category)}`
  }, []) //* run only once

  const capatilizeStr = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const fetchMore = async () => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`)
        const data = await res.json()
        setPage(page + 1)
        setArticles(articles.concat(data.articles))
        setTotalArticle(data.totalResults)
      } catch (error) { console.log('custom error' + error) }
    }
    await fetchData();
    setLoading(false)
  }

  return (
    <>
      <div className="container my-3">
        <h2 className='text-center' style={{ margin: '70px 0 30px 0'}}>
          🐵 NewsMonkey Top {capatilizeStr(props.headline)} Headlines 🔥
        </h2>

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMore}
          hasMore={articles.length <= totalArticle}
          loader={<Spinner />}
        >

          <div className="container">
            <div className="row">
              {articles.map((item, idx) => {
                return (
                  <div className="col-md-4" key={idx}>
                    <NewsItem
                      imageUrl={item.urlToImage}
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

News.defaultProps = {
  country: 'in',
  apiKey: '05965c30cda940f4a391569e716b4bed',
  pageSize: 18,
  category: 'general',
  headline: '',
  setProgress: ''
}

News.propTypes = {
  country: PropTypes.string, //* pstr
  apiKey: PropTypes.string,
  pageSize: PropTypes.number, //* pnr
  category: PropTypes.string,
  headline: PropTypes.string,
  setProgress: PropTypes.func,
}

export default News
