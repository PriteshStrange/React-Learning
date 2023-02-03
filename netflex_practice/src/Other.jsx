import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Other = () =>{
    return(
        Sdata.map((val)=>{
            return(
                
                <Card key={val.id} imgSrc={val.imgSrc} title={val.title} link={val.link}/>
            )
        })
        
    )
}

export default Other