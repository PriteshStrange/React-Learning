import React, { useEffect, useState } from 'react'
import Follower from './Follower';
import UseFetch from './UseFetch';
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";


const IndexPaginationExample = () => {
  const {loading,data} = UseFetch();
  const [page,setPage] = useState(0);
  const [followers,setFollowers] = useState([]);

  const handlePage = (Index) =>{
    setPage(Index)
  }

  const prevbtn = () =>{
    setPage((oldPage)=>{
      let prevpage = oldPage-1;
      if(prevpage < 0){
        prevpage = data.length - 1;
      }
      return prevpage;
    })
  }
  const nextbtn = () =>{
    setPage((oldPage)=>{
      let nextpage = oldPage+1;
      if(nextpage > data.length -1){
        nextpage = 0;
      }
      return nextpage;
    })
  }
  useEffect(()=>{
    if(loading) return 
    setFollowers(data[page])
},[loading,page]);

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? `Loading..` : `Example`}</h1>
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
          {!loading && (
            <div className='btn-container'>
                <button className='prev-btn' onClick={()=> prevbtn()}><FiArrowLeft/></button>
              {
                data.map((val,index) =>{
                  return <button key = {index} onClick={() => handlePage(index)} className={`page-btn ${index === page ? 'active-btn':null}`}>{index + 1}</button>
                })
              }
              <button className='prev-btn'  onClick={()=> nextbtn()}><FiArrowRight/></button>
            </div>
          )}
      </section>
    </main>
  )
}

export default IndexPaginationExample