import React,{useReducer, useState} from 'react'

// using useState example
// const Incdec = () => {
//   const [input,setInput] = useState(1)
//   return (
//     <>
//     <div style={{textAlign:"center"}}>

//       <p>Total is {input}</p>
//       <button style={{marginRight:"20px"}} onClick={(()=>setInput(input+1))}>+</button>
//       <button style={{marginRight:"20px"}} onClick={(()=>input > 0 ? setInput(input-1) :alert("value is 0"))}>-</button>
//     </div>
//     </>
//   )
// }

// Using useReducer in react

const reducer = (state,action) =>{
  if(action.type === "inc"){
    state = state + 1
  }
  if(action.type === "dec"){
    state >0 ? state = state - 1 : alert("value is 0")
  }
  return state
}

const Incdec = () => {
  const intialData = 10;
  const [state,dispatch] = useReducer(reducer,intialData);
  return (
    <>
    <div style={{textAlign:"center"}}>

      <p>Total is {state}</p>
      <button style={{marginRight:"20px"}} onClick={(()=>dispatch({type:"inc"}))}>+</button>
      <button style={{marginRight:"20px"}} onClick={(()=>dispatch({type:"dec"}))}>-</button>
    </div>
    </>
  )
}

export default Incdec