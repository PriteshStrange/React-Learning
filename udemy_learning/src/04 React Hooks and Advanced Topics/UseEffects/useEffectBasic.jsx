import React,{ useState,useEffect } from 'react';

const useEffectBasic = () => {
    const [value,setValue] = useState(0);
    useEffect(()=>{
        if(value >= 1){
            document.title = `Mesage ${value}`
        }
    })
  return (
    <>
    <h1>{value}</h1>
    <button className='btn' onClick={()=> setValue( value +1) }>Click</button>
    </>
  )
}

export default useEffectBasic