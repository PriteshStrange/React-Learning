import React, { useRef } from 'react'
import { useGlobalContext } from '../Context'
import { useEffect } from 'react';

const SearchForm = () => {
  const {setSearch} = useGlobalContext();
  const serachValue = useRef('');
  const serachCoktail = () =>{
    console.log(serachValue.current.value);
    setSearch(serachValue.current.value)
  }
  useEffect(()=>{
    serachValue.current.focus()
  },[])
  return (
    <section className='section search'>
      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>Serach that you want</label>
          <input type="text" id='name' ref={serachValue} onChange={serachCoktail}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm