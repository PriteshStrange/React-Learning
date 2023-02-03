import React, { useEffect } from 'react'
import { useState } from 'react';
import useTitleCount from './useContext/useTitleCount';

function UseEffetcs() {
    const [count,setCount] = useState(0)

   useTitleCount(count)
  return (
    <div>
        <h1>Total is {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Count</button>
    </div>
  )
}

export default UseEffetcs