import React, { useState } from 'react'
import axios from 'axios'

function Search() {
  const [data, setData] = useState('')

  const inputEnter = (params) => {
    setData(params.target.value)
  }

  return (
    <>
      <div className="center">
        <label htmlFor="search">
          <p>Search</p>
          <input
            type="text"
            name="search"
            id="search"
            value={data}
            onChange={inputEnter} />
        </label>
      </div>
      <div className="content">
        <img
          src={`https://source.unsplash.com/400x300/${data}`} />
      </div>
    </>
  )
}

export default Search