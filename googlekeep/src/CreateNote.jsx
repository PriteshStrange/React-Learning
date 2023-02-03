import './App.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@mui/icons-material/Add';
import React,{ useState } from 'react';

const CreateNote =(props)=> {
    
    const [note,setNote] = useState({
        title :"",
        content:""
    })
    const InputEvent =(event)=>{
        const {name,value} = event.target
        setNote((prevData)=>{
            return {
                ...prevData,
                [name]:value
            }
        })

        console.log("Note",note);
    }

    const addEvenet = () =>{
        props.passNote(note);
        setNote({
            title :"",
            content:""
        })
    }
  return (
   <>
   <h1>Notes</h1>
    <form>
        <input type='text' name="title" placeholder='Title' value={note.title} onChange={InputEvent} autoComplete='off'/><br></br> <br></br>
        <textarea row="" name="content" colums="" value={note.content} onChange={InputEvent} placeholder='Write a note'></textarea><br></br>
        <Button onClick={addEvenet}>
            <AddIcon/>
        </Button>
    </form>
   </>
  );
}

export default CreateNote;