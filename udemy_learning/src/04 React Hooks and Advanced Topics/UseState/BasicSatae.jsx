import React from 'react'
import { useState } from 'react';
const data = [
    {id:1,name:"Scoot"},
    {id:2,name:"John"},
    {id:3,name:"Root"},
    {id:4,name:"Smith"},
    {id:5,name:"Peter"},
]
const BasicSatae = () => {
    const [text,setText] = useState(data);
    const remove = (Id) =>{
        const newData = text.filter((curElem)=>{
            return (curElem.id !== Id)
        });
        setText(newData);
    }
  return (
    <>
        {
            text.map((val)=>{
                const {id,name} = val
                return(
                    <div className='item'>
                        <h4>{name}</h4>
                        <button onClick={() =>remove(id)}>Remove</button>
                    </div>
                )
            })
        }
        <button onClick={() => setText([])}>Remove All</button>
    </>
  )
}

export default BasicSatae