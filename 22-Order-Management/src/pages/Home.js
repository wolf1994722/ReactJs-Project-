import React, { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { FcSearch } from "react-icons/fc";

let data = [
  {
    "name": 'order',
    "mode": 'primary',
    "title": 'Recent Order of Website',
    "url": "/order"
  },
  {
    "name": 'products',
    "mode": 'warning',
    "title": 'Recent Products of Website',
    "url": "/products"
  },
  {
    "name": 'user',
    "mode": 'danger',
    "title": 'Recent User Connected',
    "url": "/users"
  },
]

const Home = () => {
  const [dataSet, setDataSet] = useState(data)
  const [searchTerm, setSearchTerm] = useState('')
  const searchValue = useRef('')

  const searchCocktails = (e) => {
    setSearchTerm(searchValue.current.value.toLowerCase())
  }

  const filterData = useCallback(() => {
      let newData = []
      for (let i = 0; i < data.length; i++) {
        let name = data[i].name.toLowerCase()
        if (name.includes(searchTerm)) {
          newData.push(data[i])
        }
      }
      setDataSet(newData)
    },
    [searchTerm],
  )

  useEffect(() => {
    searchValue.current.focus()
    filterData()
    return () => { }
  }, [filterData])

  const handleSubmit = (e) => {
    // e.preventDefault()
  }

  return (
    <main>
      <section className="section search">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">
              <FcSearch></FcSearch>
              search </label>
            <input type="text" name="" id="name" ref={searchValue} onChange={searchCocktails} placeholder="Enter text" />
          </div>
        </form>
      </section>

      <div className="home-container container">

        <div className="row">

          {
            dataSet.map((item, index) => {
              return <div key={index} onClick={()=>{ window.location.assign(`${item.url}`);}} className="col-lg-4">
                <div className="card1 card-margin1">
                  <div className="card-header no-border">
                    <h5 className="card-title">{item.name}</h5>
                  </div>
                  <div className="card-body pt-0">
                    <div className="widget-49">
                      <div className="widget-49-title-wrapper">
                        <div className={`widget-49-date-${item.mode}`}>
                          <span className="widget-49-date-day">09</span>
                          <span className="widget-49-date-month">apr</span>
                        </div>
                        <div className="widget-49-meeting-info">
                          <span className="widget-49-pro-title">{item.title}</span>
                          <span className="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
                        </div>
                      </div>
                      <ol className="widget-49-meeting-points">
                        <li className="widget-49-meeting-item"><span>Expand module is removed</span></li>
                        <li className="widget-49-meeting-item"><span>Data migration is in scope</span></li>
                        <li className="widget-49-meeting-item"><span>Session timeout increase to 30 minutes</span></li>
                      </ol>
                      <div className="widget-49-meeting-action">
                        <Link to="/order" className="btn-sm btn-flash-border-primary">View All</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            })
          }

        </div>
      </div>

    </main>
  )
}

export default Home
