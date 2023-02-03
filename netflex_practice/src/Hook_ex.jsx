import React, { useState } from "react";
const Hooks_ex = () =>{

    const [count,setCount] = useState(0);

    const change = () =>{
        setCount(count+1)
        console.log("clicked");
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={change}>Click</button>
        </>
    )
}

export default Hooks_ex