import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const [value,setValue] = useState(0);
    const reset = () =>{
        setValue(0);
    }
    const complexInc = () =>{
        setTimeout(()=>{
            setValue((preval)=>{
               return preval + 1
            })
        },2000)
    }
  return (
    <>
        <section style={{margin:"4rem 0"}}>
            <h4>Normal Counter</h4>
            <h1>{value}</h1>
            <button className='btn' onClick={() => setValue(value-1)}> Decrese</button>
            <button className='btn' onClick={reset}> reset</button>
            <button className='btn' onClick={()=> setValue(value+1)}> Increse</button>
        </section>

        <section style={{margin:"4rem 0"}}>
            <h4>Complex Counter</h4>
            <h1>{value}</h1>
            <button className='btn' onClick={complexInc}> Increse later</button>
        </section>
    </>
  )
}

export default Counter