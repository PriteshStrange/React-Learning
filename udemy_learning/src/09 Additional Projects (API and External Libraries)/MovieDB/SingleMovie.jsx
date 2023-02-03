import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { API_ENDPOINT } from './Context';
import UseFetch from './UseFetch';

const SingleMovie = () => {
    const {id} = useParams();
   const {loading,error,data:movie} = UseFetch(`&i=${id}`)

    if(loading){
      return <div className='loading'></div>
    }
    if(error.show){
      return (
        <div className='page-error'>
          <h1>{error.msg}</h1>
          <NavLink to="/" className="btn"> Back </NavLink>
        </div>
      )
    }
    const {Poster,Year,Title,Plot} = movie;
  return (
    <section className='single-movie'>
      <img src={Poster} alt={Title}/>
      <div className='single-movie-info'>
        <h2>{Title}</h2>
        <p>{Plot}</p>
        <h4>{Year}</h4>
        <NavLink to="/" className="btn"> Back </NavLink>
      </div>
    </section>
  )
}

export default SingleMovie