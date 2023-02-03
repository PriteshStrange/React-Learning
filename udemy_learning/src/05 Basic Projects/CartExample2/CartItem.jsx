import React from 'react';
import { AiFillCaretUp,AiFillCaretDown } from "react-icons/ai";
import { useGlobalContext } from './Context';


const CartItem = ({id,name,amount,price,image}) => {
    const {clearItem,Decrease,Increase} = useGlobalContext();
  return (
    <article className='cart-item'>
        <img src={image} alt={name}/>
        <div className='item-price'>
            <h4>${name}</h4>
            ${price}
        </div>
        <button className='remove-btn' onClick={() => clearItem(id)}> Remove</button>
        <div>
            <button className='amount-btn' onClick={() => Increase(id)}>
                <AiFillCaretUp/>
            </button>
            <p className='amount'> {amount}</p>
            <button className='amount-btn' onClick={() => Decrease(id)}>
                <AiFillCaretDown/>
            </button>
        </div>
    </article>
  )
}

export default CartItem