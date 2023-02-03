import React from 'react'
import CartIndex from './CartIndex';
import { AppProvider } from './Context';

const CartApp = () => {
  return (
    <AppProvider> 
        <CartIndex/>
    </AppProvider>
  )
}

export default CartApp