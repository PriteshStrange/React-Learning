import React from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import authFetch from './Custom';

const CustomAxios = () => {
    const fetchdata = async() =>{
        try{
            const resp = await authFetch(`/react-store-products`);
            const resp1 = await axios(`https://randomuser.me/api`)
        }catch(err){
            console.log(err);
        }
    } 
    useEffect(()=>{
        fetchdata()
    },[]);
  return (
    <div>CustomAxios</div>
  )
}

export default CustomAxios