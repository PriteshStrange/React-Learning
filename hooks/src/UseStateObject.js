import React from 'react'
import { useState } from 'react';

function UseStateObject() {
    const [myObject,setMyObj] = useState({
        name:"hello",age:"28",lastName:"example"
    })

    const changeObject = () =>{
        console.log("myObject",myObject)
        setMyObj({...myObject,name:"world1",age:"39",lastName:"not  "})
    }
  return (
      <>
        <h1>UseStateObject Example</h1>
        <p>Name:{myObject.name} age:{myObject.age} LastName:{myObject.lastName}</p>
        <button onClick={changeObject}>Change</button>
      </>
  )
}

export default UseStateObject