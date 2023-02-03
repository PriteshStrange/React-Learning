import React from 'react'
import CartContainer from './CartContainer'
import Navbar from './Navbar'
import { useGlobalContext } from './Context'

const CartIndex = () => {
  const {loading} = useGlobalContext()
  if(loading){
    return (
      <div className='loading'>
        <h2>Loading...</h2>
      </div>
    )
  }
  return (
        <main>
            <Navbar/>
            <CartContainer/>
        </main>
  )
}

export default CartIndex