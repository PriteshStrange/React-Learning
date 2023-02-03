import React from 'react'
import { Outlet } from 'react-router-dom'

const SharedProduct = () => {
  return (
    <div>
        <h2>Products</h2>
      <Outlet/>
    </div>
  )
}

export default SharedProduct
