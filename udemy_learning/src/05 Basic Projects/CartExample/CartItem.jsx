import React from 'react'
import { AiFillCaretUp,AiFillCaretDown } from "react-icons/ai";
import { useGlobalContext } from './Context';

const CartItem = ({id,name,image,price,amount}) => {
    const {remove,toggleAmount} = useGlobalContext()
  return (
    <article className='cart-item'>
        <img src={image} alt={name}/>
        <div>
            <h4>{name}</h4>
            <h4 className='item-price'> ${price}</h4>
            <button className='remove-btn' onClick={() => remove(id)}>Remove</button>
        </div>
        <div>
            <button className='amount-btn' onClick={() => toggleAmount(id,'inc')}>
                <AiFillCaretUp/>
            </button>
            <p className='amount'> {amount}</p>
            <button className='amount-btn' onClick={() => toggleAmount(id,'dec')}>
                <AiFillCaretDown/>
            </button>
        </div>
    </article>
  )
}

export default CartItem