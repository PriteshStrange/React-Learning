import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const MultipleReturn = () => {
    const url = "https://api.github.com/users/mojombo";
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [user,setUser] = useState('Default data');

    useEffect(()=>{
        fetch(url)
        .then((resp)=> {
            if(resp.status >= 200 && resp.status <= 299){
                return resp.json()
            }else{
                setLoading(false);
                setError(true);
            }
        })
        .then((user)=>{
            console.log("user",user);
            const {login} = user
            setUser(login);
            setLoading(false);
        })
        .catch((error)=>console.log(error))
    },[]);

    if(loading){
        return (
            <div>
                <h3>Loading...</h3>
            </div>
        )
    }
    if(error){
        return (
            <div>
                <h3>Error occur...</h3>
            </div>
        )
    }

  return (
    <div>{user}</div>
  )
}

export default MultipleReturn