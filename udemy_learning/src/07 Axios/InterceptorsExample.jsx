import React from 'react'
import authFetch from './Interceptors'
import { useEffect } from 'react';

const InterceptorsExample = () => {
    const fetch = async() =>{
        try{
            const res =  await authFetch(`/react-store-products`);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        fetch();
    },[]) 
  return (
    <div>InterceptorsExample</div>
  )
}

export default InterceptorsExample