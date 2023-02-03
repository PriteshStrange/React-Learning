import React from 'react'
import { useState, useContext } from 'react';
import { contextExample } from './Tour';

const TourData = ({id,image,info,name,price}) => {
    const [readmore,setReadmore] = useState(false);
    const {RemoveTour} = useContext(contextExample);
  return (
    <article className='single-tour'>
        <br></br>
        <img src={image} alt={name}/>
        <footer>
            <div className='tour-info'>
                <h4>{name}</h4>
                <h4>${price}</h4>
            </div>
            <p>
                { readmore ? info : `${info.substring(0,200)}... `}
                <button onClick={()=> setReadmore(!readmore)}>
                    { readmore ? ` show less` : `readmore` }
                </button>
            </p>
            <button onClick={() => RemoveTour(id)}>Remove</button>
        </footer>
    </article>
  )
}

export default TourData