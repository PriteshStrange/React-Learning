import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Netfliex = () =>{
    return(

        <Card key={Sdata[1].id} imgSrc={Sdata[1].imgSrc} title={Sdata[1].title} link={Sdata[1].link}/>
    )
}

export default Netfliex