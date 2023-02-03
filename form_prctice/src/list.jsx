import React from "react";

const Lists =(props)=>{

    
    console.log("Props",props);
    return (
    <>
    <div>
        <li>{props.text}</li>
        <button onClick={()=>props.onSelect(props.id)}>Completed </button>
    </div>
    </>
    )
}

export default Lists