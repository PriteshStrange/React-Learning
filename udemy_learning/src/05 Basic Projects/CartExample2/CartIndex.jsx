import React from 'react'
import Navbar from './Navbar';
import CartContainer from './CartContainer'
import { useGlobalContext } from './Context';

const CartIndex = () => {
    const {loading} = useGlobalContext()
    if(loading){
        return (
            <div className='loading'>
                Loading....
            </div>
        )
    }
  return (
    <div>
        <Navbar/>
        <CartContainer/>
    </div>
  )
}

export default CartIndex