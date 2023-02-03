import React from 'react'
import { FcApproval } from "react-icons/fc";

const Users = ({user}) => {
  console.log("Value is",user);
  return (
      <>
      <h2>How to fetch data from api Example</h2>
    {user.map((val,index)=>{
        const {login,avatar_url,id,type} =val
        return (
          <div key={index}>
            
            <h4>Name:-- {login} <FcApproval/></h4>
            <img src={avatar_url} width="155"/><br></br>
            <span>Articals:--</span><span>{id}</span><br></br>
            <span>Followers:--</span><span>9870</span><br></br>
            <span>Ratings:--</span><span>8.7</span><br></br>
            <span>Role:--</span><span>{type}</span>
        </div>
         
        )
      })}
      </>
  )
}

export default Users