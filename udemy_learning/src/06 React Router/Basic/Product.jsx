import React from 'react'
import { Link } from 'react-router-dom';
import Data from '../../Data'

const Product = () => {
  return (
    <section className='section'>
      <div className='products'>
        {
          Data.map((val)=>{
            const {id,name} = val;
            return <article key={id}>
                <h5>{name}</h5>
                <Link to={`/product/${id}`}> More Info</Link>
              </article>
            
          })
        }
      </div>
      Product
    </section>
  )
}

export default Product
