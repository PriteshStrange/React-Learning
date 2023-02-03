import React,{useState} from "react";

const IncDec = ()=>{
    const [num,setNum] = useState(0)

    const Increment = () =>{
        console.log(num);
       

            setNum(Number(num)+1)
        
    }
    const Decrement = () =>{
        if(num>0){

            setNum(Number(num)-1)
        }else{
            alert("Something is Wrong")
            setNum(0)
        }
    }

    let handleChange =(event)=>{
        event.preventDeafult()
    }
    return (
        <>
         <input type="text" value={num} onChange={handleChange} name="answer"/><br></br>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </>
    )
   
}

export default IncDec