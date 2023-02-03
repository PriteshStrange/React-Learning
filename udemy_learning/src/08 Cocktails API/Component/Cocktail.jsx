import React from 'react'
import { NavLink } from 'react-router-dom'

const Cocktail = ({id,name,info,glass,image}) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name}/>
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <NavLink to={`/coktail/${id}`} className="btn btn-primary">More Info</NavLink>
      </div>
    </article>
  )
}

export default Cocktail