import React from 'react'
import { useGlobalContext } from './Context'

const Form = () => {
    const {query,setQuery,error} = useGlobalContext();
  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
        <h2>Serach</h2>
        <input type='text' className='form-input' value={query} onChange={(e) => setQuery(e.target.value)}/>
        {error.show && <div className='error'>{error.msg}</div>}
    </form>
  )
}

export default Form