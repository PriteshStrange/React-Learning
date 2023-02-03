import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Loading from '../Component/Loading';

const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`

const SingleCoktail = () => {
  const {id} = useParams();
  const [loading,setLoading] = useState(false);
  const [cocktail,setCocktail] = useState(null);

  useEffect(()=>{
    setLoading(true);
    async function getData(){
      try {
        const resp = await fetch(`${url}${id}`);
         const data = await resp.json();
          if(data.drinks){
            const {strDrink:name,strDrinkThumb:image,strAlcoholic:info,strGlass:glass,strCategory:cateory,
            strInstructions:instructions,strIngredient1,strIngredient2,strIngredient3,strIngredient4}
               = data.drinks[0];

            const Indgridiants = [
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4
            ];

            const newData = {name,image,info,glass,instructions,Indgridiants,cateory};
            setCocktail(newData);
          }else{
            setCocktail(null);
          }
          setLoading(false)
      } catch (error) {
          console.log(error);
          setLoading(false)
      }
    }
    getData();
  },[id]);

  if(loading){
    return <Loading/>
  }
  if(!cocktail){
    return <h2 className='section-title'>No Data Found</h2>
  }
  const {name,image,info,glass,instructions,Indgridiants,cateory} = cocktail;
  return (
    <section className='section cocktail-section'>
      <NavLink to="/" className='btn btn-primary'>Home</NavLink>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name}/>
        <div className='drink-info'>
          <p>
            <span className='drink-data'>Name: </span>{name}
          </p>
          <p>
            <span className='drink-data'>Category: </span>{cateory}
          </p>
          <p>
            <span className='drink-data'>Info: </span>{info}
          </p>
          <p>
            <span className='drink-data'>Glass: </span>{glass}
          </p>
          <p>
            <span className='drink-data'>Indgridiants: </span>{Indgridiants}
          </p>
          <p>
            <span className='drink-data'>Instructions: </span>{instructions}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCoktail