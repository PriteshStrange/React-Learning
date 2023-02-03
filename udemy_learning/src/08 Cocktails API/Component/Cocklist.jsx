import React from 'react'
import { useGlobalContext } from '../Context'
import Loading from './Loading';
import Cocktail from './Cocktail';

const Cocklist = () => {
  const {loading,coktail} = useGlobalContext(); 
  if(loading){
    return <Loading/>
  }
  if(coktail.length < 1){
    return <h2>No Data found..</h2>
  }
  return (
    <section className='section'>
      <h2 className='section-title'>
        Data List
      </h2>
      <div className='cocktails-container'>
        {coktail.map((val)=>{
          return <Cocktail key={val.id} {...val}/>
        })}
      </div>
      Cocklist
    </section>
  )
}

export default Cocklist
