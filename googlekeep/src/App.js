
import './App.css';
import CreateNote from './CreateNote';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import React,{ useState } from 'react';

const App =()=> {
  const [addItem,setAddItem] = useState([]);
  const addNote = (note) =>{
    setAddItem((prevData)=>{
      return [...prevData,note]
    })
    console.log("New Item Data",note)
  }

  const onDelete = (id) =>{
    setAddItem((prevData)=>
      prevData.filter((currdata,index)=>{
        return index !== id
      })
    )
  }


  return (
   <>
   <Header/>
   <CreateNote passNote={addNote}/>
    {
      addItem.map((val,index)=>{
          return <Note key={index} id={index} title={val.title} content={val.content} deleteItem={onDelete}/>
      })
    }
   <Footer/>
   </>
  );
}

export default App;
