import React from 'react'

const Category = ({categories,filterItems}) => {
  return (
    <div className='btn-container'>
        {
            categories.map((val,index)=>{
                return (
                    <button type='button' className='filter-btn' key={index} onClick={() =>filterItems(val)}>{val}</button>
                )
            })
        }
        
       
    </div>
  )
}

export default Category