import React from 'react'
import useFetch from './useFetch';
const url = "https://api.github.com/users";

const Example = () => {
    const {loading,products} = useFetch(url)

    console.log(products);
  return (
    <div>{loading ? 'Loading...' : 'Hello'}</div>
  )
}

export default Example