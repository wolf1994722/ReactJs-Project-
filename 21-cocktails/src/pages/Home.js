import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <main>
      <SearchForm></SearchForm>
      <CocktailList></CocktailList>
    </main>
  )
}

export default Home
