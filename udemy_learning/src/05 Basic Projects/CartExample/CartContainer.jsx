import React from 'react'
import CartItem from './CartItem';
import {useGlobalContext} from './Context'

const CartContainer = () => {
    const {cart,total,clearCart} = useGlobalContext();
    if(cart.length === 0){
        return (
            <section className='header'>
                <header>
                    <h2>Data</h2>
                    <h4 className='empty-cart'>There is a empty</h4>
                </header>
            </section>
        )
    }
  return (
    <section className='cart'>
        <header>
            <h2>your data</h2>
        </header>
        <div>
            {
               cart.map((val)=>{
                    return <CartItem key={val.id} {...val}/>
               }) 
            }
        </div>
        
        <footer>
            <hr/>
            <div className='cart-total'>
                <h4>
                    total<span>${total}</span>
                </h4>
            </div>
            <button className='btn clear-btn' onClick={clearCart}>Remove All</button>
        </footer>
    </section>
  )
}

export default CartContainer