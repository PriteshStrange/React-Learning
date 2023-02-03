import React, { useEffect } from 'react'
import Follower from './Follower';
import UseFetch from './UseFetch'
import { useState } from 'react';
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";

const IndexPagination = () => {
    const {loading,data} = UseFetch();
    const [page,setPage] = useState(0);
    const [followers,setFollower] = useState([]);
    console.log("data",data);
    useEffect(()=>{
        if(loading) return 
        setFollower(data[page])
    },[loading,page]);

   const handlePage = (index) =>{
       console.log("object");
        setPage(index)
   }

   const prevPage = () =>{
        setPage((oldPage)=>{
            let prevPage = oldPage-1;
            if(prevPage < 0){
                prevPage =  data.length -1 ;
            }
            return prevPage
        })
   }
   const nextPage = () =>{
    setPage((oldPage)=>{
        let nextPage = oldPage + 1;
        if(nextPage > data.length -1){
            nextPage = 0
        }
        return nextPage;
    })
   }
  return (
    <main>
        <div className='section-title'>
            <h1>{loading ? `Loading...` : 'pagination'}</h1>
            <div className='underline'></div>
        </div>
        <section className='followers'>
            <div className='container'>
                {
                     followers.map((follower)=>{
                        return <Follower key={follower.id} {...follower}/>
                    })
                }
            </div>
            {
                !loading && <div className='btn-container'>
                    <button className='prev-btn' onClick={prevPage}><FiArrowLeft/></button>
                    { 
                        data.map((item,index)=>{
                            return <button key={index} 
                            className={`page-btn ${index === page ? 'active-btn':null}`}
                            onClick={()=> handlePage(index)}>{index + 1}</button>
                        })
                    }
                     <button className='prev-btn' onClick={nextPage}><FiArrowRight/></button>
                </div>
            }
        </section>
    </main>
  )
}

export default IndexPagination