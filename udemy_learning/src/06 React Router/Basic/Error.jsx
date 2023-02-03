import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
      <>
        <div>Page Not Found</div>
        <Link to='/'>Home</Link>
      </>
  )
}

export default Error