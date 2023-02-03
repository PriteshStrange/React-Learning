import React, { useEffect, useState } from 'react'
import paginate from './Utils';
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

const UseFetch = () => {
  const [loading,setLoading] = useState(true);
  const [data,setData] = useState([]);

  const getData = async() =>{
    const resp = await fetch(url);
    const userdata = await resp.json();
    setData(paginate(userdata));
    setLoading(false)
  } 
  useEffect(()=>{
    getData();
  },[])
  return ({loading,data}
  )
}

export default UseFetch