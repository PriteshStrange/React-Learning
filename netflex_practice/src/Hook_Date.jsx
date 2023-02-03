import React,{useState} from "react";

const Hook_Date = () =>{
    

    let time = new Date().toLocaleTimeString();
    const [ctime,setDate] = useState(time)

    const changeTime = () =>{
        let time =new Date().toLocaleTimeString();
        setDate(time)
    }
    setInterval(changeTime,1000)
    return (
        <>
        <p>{ctime}</p>
        </>
    )
}

export default Hook_Date