import React,{useState} from 'react'

const AccordionCompleteAns = ({name,desc}) => {
    const [toogle,setToogle] = useState(false);
    console.log(toogle);
  return (
    <div> <section>
    <h4>{name}</h4> <button onClick={() => setToogle(!toogle)}>+</button> 
    <div>
        { toogle && <p>{desc}</p>}
    </div>
    </section></div>
  )
}

export default AccordionCompleteAns