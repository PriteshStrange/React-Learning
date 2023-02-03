import React,{useEffect} from 'react'
import { useState } from 'react';

const Statewise = () => {
    const [apiData,setApiData] = useState([])
    const getData = async() =>{
        const res = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const data = await res.json();
        console.log("datya",data)
        const newData =  data.data
        setApiData(newData)
        
       
        console.log("🚀 ~ file: Statewise.js ~ line 7 ~ getData ~ data", data)
    }
    useEffect (() =>{
        getData()
    },[])
  return (
    <>
        Example of UseEffect with api
        <table border="2">
            <tr>
                    <th>Nation</th>
                    <th>Population</th>
                    <th>Year</th>
                
            </tr>
            {
                apiData.map((val,ind)=>{
                    return (
                        
                        <tr key={ind}>
                            <td>{val.Nation}</td>
                            <td>{val.Population}</td>
                            <td>{val.Year}</td>
                        </tr>
                        
                       
                    )
                })
            }
          
            
        </table>
    </>
  )
}

export default Statewise


  
