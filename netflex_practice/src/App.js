import './App.css';
import Other from './Other'
import Netfliex from './Netflix';
import Hook_ex from './Hook_ex'
import Hook_Date from './Hook_Date';

const favSer = "netfli";

const FavS = () =>{
  return favSer === "netflix" ? <Netfliex/> :  <Other/>
}

const Sloat = (props) =>{
  let x= props.x;
  let y=props.y;
  let z=props.z;

  if((x===y) && (y===z)){
    return (
      <>
      <h1>Value is Match</h1>
      </>
    )
  }else{
    return (
      <>
      <h1>Value is Not Match</h1>
      </>
    )
  }

}

function App() {
  return (
  <>
  <Hook_ex/> <FavS/> <Sloat x="3" y="4" z="5"/> <Sloat x="3" y="3" z="3"/> <Sloat x="3" y="3" z="5"/> <Hook_Date/>
  </>
  );
}

export default App;