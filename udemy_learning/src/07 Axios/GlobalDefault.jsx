import React from 'react'
import { useEffect } from 'react';
import axios from 'axios'
const producturl = `https://course-api.com/react-store-products`;
const randomurl = `https://randomuser.me/api`;

const GlobalDefault = () => {
    const FetchData = async()=>{
        const resp = await axios(producturl);
        console.log(resp);
    }
    useEffect(()=>{
        FetchData()
    },[])
  return (
    <div>GlobalDefault</div>
  )
}

export default GlobalDefault