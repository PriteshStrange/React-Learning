import React from 'react'
import { useState, useEffect } from 'react';

function UseEffects2() {
    const [size,setSize] = useState(window.screen.width)

    const actualWidth = ()=>{
        setSize(window.innerWidth)
    }

    useEffect(()=>{
        console.log("Add Event");
        window.addEventListener("resize",actualWidth);

        return () =>{
            console.log("Remove Element");
        }
    })
  return (
    <>
    <h2>Example of window width</h2>
    <div>THe Window size is {size}</div>
    </>
  )
}

export default UseEffects2