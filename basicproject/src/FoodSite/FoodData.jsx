import React from 'react'

const FoodData = ({filterData,catItems}) => {
  return (
      <>
      <div style={{textAlign:"center"}}>
    {catItems.map((but,index)=>{
        return (

            <button style={{marginRight:"20px"}} key={index} onClick={() =>filterData(but)}>{but}</button>
        )
    })}
    </div>
      </>

  )
}

export default FoodData