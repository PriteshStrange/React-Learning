import React,{ useEffect, useState } from 'react';
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=51531bb2`;

const UseFetch = (urlParams) => {
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState({show:false,msg:''});
    const [data,setData] = useState(null);

    const fetchMoviews = async(url) =>{
        setLoading(true);
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            if(data.Response === 'True'){
                console.log(data.Search);
                setData(data.Search || data);
                setError({show:false,msg:''});
            }else{
                setError({show:true,msg:data.Error});
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{
        fetchMoviews(`${API_ENDPOINT}${urlParams}`)
    },[urlParams]);
  return {loading,error,data}
}

export default UseFetch