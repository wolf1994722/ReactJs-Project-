import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'
import { FcSearch } from "react-icons/fc";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef('')

  const searchCocktails = (e) => {
    setSearchTerm(searchValue.current.value.toLowerCase())
  }

  useEffect(() => {
    searchValue.current.focus()
    return () => { }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">
            <FcSearch></FcSearch>
             search </label>
          <input type="text" name="" id="name" ref={searchValue} onChange={searchCocktails} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
