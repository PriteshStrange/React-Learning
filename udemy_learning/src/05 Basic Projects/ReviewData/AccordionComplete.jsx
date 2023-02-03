import React,{useState} from 'react'
import Sdata from "../Birth-day Reminder/Data";
import {AiOutlineMinus,AiOutlinePlus} from "react-icons/ai"
// import AccordionCompleteAns from './AccordionCompleteAns';


const AccordionComplete = () => {
    const [index,setIndex]  = useState(Sdata);
    const [toogle,setToogle] = useState(false);
    console.log(toogle);
  return (
    <div>
      <section className="container">
        <div className="title">
          <h2>According Complete</h2>
          <div className="underline"></div>
          {
              index.map((val)=>{
                    return (
                        <AccordionCompleteAns {...val}/>
                        
                    )
                    
              })
          }
        </div>
      </section>
    </div>
  )
}

const AccordionCompleteAns = ({name,desc}) => {
    const [toogle,setToogle] = useState(false);
   
  return (
    <div>
        <section>
            { console.log(name)}
        <h4>{name}</h4> <button onClick={() => setToogle(!toogle)}>{toogle ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button> 
        <div>
            { toogle && <p>{desc}</p>}
        </div>
        </section>
    </div>
  )
}
export default AccordionComplete
