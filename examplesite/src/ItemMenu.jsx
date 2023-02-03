import React from 'react'

const ItemMenu = ({filterItem,catItems}) => {
  return (
    <>
      <div style={{textAlign:"center"}}>
    {
        catItems.map((curEle,index)=>{
            console.log("object",curEle);
            return (
                <button style={{marginRight:"20px"}} key={index} onClick={()=>filterItem(curEle)}>{curEle}</button>
                )
              })
    }
      </div>
   
    </>
  )
}

export default ItemMenu


