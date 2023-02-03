import React from 'react'
import { useGlobalContext } from './Context'
import { NavLink } from 'react-router-dom';
const defaultImage = `https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png`

const Movie = () => {
  const {loading,movie} = useGlobalContext();
  if(loading){
    return <div className='loading'></div>
  }
  return (
    <section className='movies'>
      {movie.map((val)=>{
        const {imdbID:id,Poster:poster,Title:title,Year:year} = val;
        return <NavLink to={`/movie/${id}`} key={id} className="movie">
          <article>
            <img src={poster === 'N/A' ? defaultImage : poster} alt={title}/>
            <div className='movie-info'>
              <h4 className='title'>{title}</h4>
              <p>{year}</p>
            </div>
          </article>
        </NavLink>
      })}
    </section>
  )
}

export default Movie