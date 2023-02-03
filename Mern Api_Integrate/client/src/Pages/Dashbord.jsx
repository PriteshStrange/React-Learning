import React from 'react'
// import jwt from "jsonwebtoken"
// import { useNavigate } from 'react-router-dom'
import Product from './Product';

const Dashbord = () => {
    // const navigate = useNavigate();
    // const checkToken = async() =>{
    //     const req = await fetch('',{
    //         headers:{
    //             'x-axxess-token':localStorage.getItem('token')
    //         }
    //     });
    //     const data = req.json();
    //     console.log("data",data);
    // } 


    // useEffect(()=>{
    //     const token = localStorage.getItem('token');
    //     if(token){
    //         const user = jwt.decode(token)
    //         console.log("🚀 ~ file: Dashbord.jsx:9 ~ useEffect ~ user", user);
    //         if(!user){
    //             localStorage.removeItem('token');
    //             navigate("/login")
    //         }else{
    //             checkToken()
    //         }
    //     }
    // },[]);
    
    return (
        <>
        <Product/>
      </>
  )
}

export default Dashbord