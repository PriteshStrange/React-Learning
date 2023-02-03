import React,{useEffect} from 'react'
import { useState } from 'react';
import { Loading } from './External/Loading';
import Users from './External/Users';

function UseEffectApi() {

  const [user,setUser] = useState([]);
  const [loading,setLoading] = useState(true)
  const getUsers = async() =>{
    try{
      const response = await fetch('https://api.github.com/users');
      setLoading(false)
      setUser( await response.json());
    }catch(err){
      console.log(`Error is ${err}`);
    }
    
  }

  useEffect (()=>{
    getUsers()
  },[])

  if(loading){
    return <Loading/>
  }

  return (
    <>
    <Users user={user}/>
    </>
  )
}

export default UseEffectApi