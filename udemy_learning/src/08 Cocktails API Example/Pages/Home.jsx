import React from 'react'
import CocktailList from '../Component/CocktailList'
import SearchForm from '../Component/SearchForm'

const Home = () => {
  return (
    <div>
      <SearchForm/>
      <CocktailList/>
      </div>
  )
}

export default Home