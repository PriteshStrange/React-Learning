import React, { useState } from "react";
import UseArray from "./UseArray";
import UseStateObject from "./UseStateObject";
import BasicForms from "./forms/BasicForms";
import UseEffetcs from "./useEffects/UseEffetcs";
import UseEffects2 from "./useEffects/UseEffects2";
import UseEffectApi from "./useEffects/UseEffectApi";
// import FormsExample from "./forms/FormsExample";
import Uncontolled from './forms/Uncontolled';
import UseReducerExample from "./UseReducerExample";
import Ex1 from "./useEffects/useContext/Ex1";
import Home from "./MyApp/home";
import Statewise from "./StaeWise/Statewise";

const App = () =>{
  const [name,setName] = useState('old one')
  const changeName =()=>{
    let val = name;
    val === 'old one' ? setName("new one"): setName("old one")
    

  }
  return (
    <>
    <h1>
      Hello {name}
    </h1>
    <button onClick={changeName}>Click Me</button>
    {/* <Ex1/>
    <UseReducerExample/>
    <Uncontolled/>
    <UseArray/>
    <UseStateObject/>
    <BasicForms/>
    <UseEffetcs/>
    <UseEffects2/>
    <UseEffectApi/> */}
    {/* <FormsExample/>  */}
    <Home/>
    <Statewise/>
    </>
  )
}

export default App
