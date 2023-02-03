import React, { useReducer } from 'react'

const intialState = 0
const reducer = (state,action) => {
  if(action.type === "INC"){
      return state + 1
  }else{
    return state - 1
  }
  // return state;
}

const UseReducerExample = () => {
 const [state,dispatch] = useReducer(reducer,intialState)
  return (
    <div>
      <p>New State Value is {state}</p>
      <button onClick={()=>{dispatch({type:"INC"})}}> Increament </button>
      <button onClick={()=>{dispatch({type:"DEC"})}}> Decreament </button>
    </div>
  )
}

export default UseReducerExample