import React from 'react'
import { useState } from 'react';

const UseArray = () => {
    const arrData = [
        {
            id:1,name:"hello",age:28
        },
        {
            id:2,name:"world",age:24
        },
        {
            id:3,name:"example",age:26
        }
    ]

    const [myArray,setmyArray] = useState(arrData)

    const clearArray = () =>{
        setmyArray([]);
    }
    
    const removeEle = (id) =>{
        const myNewArray = myArray.filter((CurrentElement)=>{
            return id !== CurrentElement.id
        })
        setmyArray(myNewArray)
    }
  return (
    <>
            <h2>example of filter with useState</h2>
        {
            myArray.map((curData)=>{
                return ( 
                    <>
                    <p key={curData.id}>Name:-{curData.name} & Age:-- {curData.age} <button onClick={() =>removeEle(curData.id)}>Remove</button></p> 
                    
                    </>
                )
            })
        }
        <br></br><button onClick={clearArray}>Clik </button>
    </>
  )
}

export default UseArray