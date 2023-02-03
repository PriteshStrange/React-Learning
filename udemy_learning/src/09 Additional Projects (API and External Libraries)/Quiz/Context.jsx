import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
// const API_ENDPOINT = `https://opentdb.com/api.php?`;
// const temp = `https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple`;
// const temp = `https://opentdb.com/api.php?amount=50&category=24&difficulty=easy&type=multiple`

const AppContext = createContext();
const table ={
    sports:21,
    history:23,
    politics:24
}

const AppProvider = ({children}) =>{
    const [waiting,setWaiting] = useState(true);
    const [loading,setLoading] = useState(false);
    const [questions,setQuestion] = useState([]);
    const [quiz,setQuiz] = useState({amount:10,category:'politics',difficulty:'medium'})
    const [index,setIndex] = useState(0);
    const [correct,setCorrect] = useState(0);
    const [error,setError] = useState(false);
    const [modal,setModal] = useState(false);

    const fetchQuestion = async(url) =>{
        setLoading(true);
        setWaiting(false)
        const resp = await axios(url).catch((err)=>{
            console.log("Error",err);
        });
        
        if(resp){
            const data = resp.data.results;
            if(data.length > 0){
                setQuestion(data);
                setLoading(false);
                setWaiting(false);
                setError(false)
            }
        }
    };
    const nextQuestion = () =>{
        setIndex((oldIndex)=>{
            const index = oldIndex + 1;
            if(index > questions.length-1){
                openModal()
                return 0
            }else{
                return index;
            }
        })
    };

    const correctAnswer = (val) =>{
        if(val){
            setCorrect((oldState)=> oldState + 1)
        }
        nextQuestion();
    };

    const openModal = () =>{
        setModal(true);
    };

    const closeModal = () =>{
        setWaiting(true);
        setCorrect(0)
        setModal(true);
    };
    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setQuiz({...quiz,[name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const {amount,category,difficulty} = quiz;
        const url = `https://opentdb.com/api.php?amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`;
        fetchQuestion(url)
    }
    // useEffect(()=>{
    //     fetchQuestion(temp);
    // },[])

    return <AppContext.Provider 
    value={{waiting,loading,questions,index,correct,error,modal,nextQuestion,correctAnswer,setModal,closeModal,quiz,handleChange,handleSubmit}}>
        { children}</AppContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}
