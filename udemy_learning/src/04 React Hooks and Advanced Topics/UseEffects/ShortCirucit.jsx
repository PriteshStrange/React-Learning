import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const ShortCirucit = () => {
    const [text,setText] = useState('');
    const [error,setError] = useState(false)
  return (
    <>
    <h4>Example</h4>
    <button onClick={()=> setError(!error)}>Change</button>
    {error && <h1>Error...</h1>}
    <ShowSide/>
    </>
  )
}

const ShowSide = () =>{
    const [show,setShow] = useState(false);
    return (
        <>
        <br></br>
        <button onClick={() => setShow(!show)}>Show Data</button>
        {show && <Item/>}
        </>
    )
}

const Item = () =>{

    const [screen,setscreen] = useState(window.innerWidth);
    const checkSize = () =>{
        setscreen(window.innerWidth);
    };
    useEffect(()=>{
        window.addEventListener('resize',checkSize);
        return () =>{
            window.removeEventListener('resize',checkSize);
        }
    },[]);
    console.log(screen);
    return (
        <>
        <br></br>
        <h3>Window :</h3>
        <h4>Size: {screen}</h4>
        </>
    )
}

export default ShortCirucit