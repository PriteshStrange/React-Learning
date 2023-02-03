import React from 'react';
import { useEffect } from 'react';
import axios from 'axios'
const url = `https://course-api.com/react-store-products`

const FirstRequest = () => {
    const fetchData = async() =>{
        try{
            const response = await axios(url);
            console.log(response);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        fetchData()
        console.log("object");
    },[])
  return (
    <h3>First Request</h3>
  )
}

export default FirstRequest