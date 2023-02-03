import React,{createContext, useContext, useState} from 'react';
import Sdata from '../../Birth-day Reminder/Data';

const contextData = createContext();

const SolutionContextApi = () => {
    const [people,setPeople] = useState(Sdata);
    const removePerson = (id) =>{
        setPeople((people)=>{
            return people.filter((person)=> person.id !== id)
        })
    }
  return (
    <contextData.Provider value={{removePerson,people}}>
        <List  />
    </contextData.Provider>
  )
}

const List = () =>{
    const mainData = useContext(contextData)
    return (
        <>
        {
           mainData.people.map((val)=>{
               console.log(val.id);
                return <SinglePage  {...val} key={val.id}/>
           }) 
        }
        </>
    )
}

const SinglePage = ({id,name}) =>{
    const {removePerson} = useContext(contextData);
    return (

    <div>
    <h4>{name}</h4>
    <button onClick={() => removePerson(id)}>Remove</button>
    </div>
    )
}

export default SolutionContextApi