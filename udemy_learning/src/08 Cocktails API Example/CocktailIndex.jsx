import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import About from './Pages/About'
import Error from './Pages/Error'
import Home from './Pages/Home'
import SingleCoktail from './Pages/SingleCoktail';

const CocktailIndex = () => {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/coktail/:id' element={<SingleCoktail/>}/>
        <Route path='*' element={<Error/>}/>

      </Routes>
    </div>
  )
}

export default CocktailIndex