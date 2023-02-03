import React from 'react'
import data from '../../Data'
import { useState } from 'react';
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";
import { useEffect } from 'react';



const Slidebarindex = () => {
    const [people,setpeople] = useState(data);
    const [index,setIndex] = useState(0);

    useEffect(()=>{
      const lastIndex = people.length - 1;
      if(index < 0){
        setIndex(lastIndex)
      } 
      if(index > lastIndex){
        setIndex(0)
      }
    },[index,people]);

    useEffect(()=>{
      let slider = setInterval(()=>{
        setIndex(index+1)
      },3000);
      return ()=> clearInterval(slider)
    })

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className='section-center'>
        {
          people.map((val,valIndex)=>{
            const {id,name,age,image,desc,quotes} = val;
            let postion = 'nextSlide';
            if(valIndex === index){
              postion='activeSlide'
            }
            if(valIndex === index-1){
              postion='lastSlide'
            }
            if(valIndex === index-1 || (index === 0 && valIndex === people.length -1)){
                postion = 'lastSlide'
            }
            return (
              <article className={postion} key={id}>
                <img src={image} alt={name} className='person-img'/>
                <h4>{name}</h4>
                <p className='title'>{quotes}</p>
                <p className='text'>{desc}</p>
              </article>
            )
          })
        }
        <button className='prev' onClick={() => setIndex(index - 1)}><FiChevronLeft/></button>
        <button className='next'  onClick={() => setIndex(index + 1)}><FiChevronRight/></button>
      </div>
    </section>
  )
}

export default Slidebarindex
