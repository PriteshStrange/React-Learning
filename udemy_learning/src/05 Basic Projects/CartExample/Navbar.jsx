import React from 'react'
import { useGlobalContext } from './Context'

const Navbar = () => {
    const {amount} = useGlobalContext();
    console.log(amount)
  return (
    <nav>
        <div className='nav-center'>
            <h3>Example</h3>
        </div>
        <div className='nav-container'>
            <div className='amount-container'>
                <p className='total-amount'>{amount}</p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar