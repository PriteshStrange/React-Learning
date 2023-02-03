import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Data from '../../Data'

const SingleProduct = () => {
  const {productId} = useParams();
  const product = Data.find((item) => productId === item.id)
  const {image,name} =product;
  return (
   <section>
     <img src={image} alt={name}/>
     <h4>{name}</h4>
     <Link to='/product'> Back</Link>
   </section>
  )
}

export default SingleProduct