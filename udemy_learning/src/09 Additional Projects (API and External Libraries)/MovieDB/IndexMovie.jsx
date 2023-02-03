import React from 'react'
import {Switch,Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './Home'
import Movie from './Movie'
import SingleMovie from './SingleMovie'

const IndexMovie = () => {
  return (
      <BrowserRouter>
        <Route path="/" exact><Home/></Route>
        <Route path="/movie/:id" ><SingleMovie/></Route>
      </BrowserRouter>
  )
}

export default IndexMovie