import React from 'react'
import { useGlobalContext } from '../Context'
import Loading from './Loading';

const CocktailList = () => {
  const {loading,cocktail} = useGlobalContext();
  if(loading){
    return <Loading/>
  }
  if(cocktail.length < 1){
    return <h2 className='section-title'>There is no data availbale....</h2>
  }
  return (
    <div>CocktailList</div>
  )
}

export default CocktailList