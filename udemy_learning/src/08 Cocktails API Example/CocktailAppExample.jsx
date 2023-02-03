import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import CocktailIndex from './CocktailIndex'
import { AppProvider } from './Context'

const CocktailAppExample = () => {
  return (
    <BrowserRouter>
    <AppProvider>
      <CocktailIndex/>
    </AppProvider>
    </BrowserRouter>
  )
}

export default CocktailAppExample