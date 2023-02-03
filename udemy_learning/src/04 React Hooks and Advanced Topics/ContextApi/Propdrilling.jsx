import React,{useState} from 'react'
import Sdata from '../../05 Basic Projects/Birth-day Reminder/Data'

const MainContext = () => {
    const [people,setPeople] = useState(Sdata);
    const removePerson = (id) =>{
        setPeople((people)=>{
            return people.filter((person)=> person.id !== id)
        })
    }
  return (
    <section>
        <List removePerson={removePerson} people={people}/>
    </section>
  )
}

const List = ({people,removePerson}) =>{
    return (
        <>
        {
           people.map((val)=>{
               console.log(val.id);
                return <SinglePage removePerson={removePerson} {...val} key={val.id}/>
           }) 
        }
        </>
    )
}

const SinglePage = ({id,name,removePerson}) =>{
    return (

    <div>
    <h4>{name}</h4>
    <button onClick={() => removePerson(id)}>Remove</button>
    </div>
    )
}

export default MainContext