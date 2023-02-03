import React from 'react'
import { useGlobalContext } from './Context'
import Loading from './Loading';
import Modal from './Modal';
import SetupForm from './SetupForm';

const QuizApp = () => {
    const {waiting,loading,questions,index,correct,nextQuestion,correctAnswer} = useGlobalContext();
    if(waiting){
        return <SetupForm/>
    }
    if(loading){
        return <Loading/>
    }
    const {question,correct_answer,incorrect_answers} = questions[index];
    const answers = [...incorrect_answers];
    const tempIndex = Math.floor(Math.random() * 4);
    if(tempIndex === 3){
        answers.push(correct_answer)
    }else{
        answers.push(answers[tempIndex]);
        answers[tempIndex] = correct_answer;
    }
  return (
    <main>
        <Modal/>
        <section className='quiz'>
            <p className='correct-answers'>
                Correct Answer:--{correct}/{index}
            </p>
            <article className='container'>
                <h2 dangerouslySetInnerHTML={{ __html : question}}/>
                <div className='btn-container'>
                    {
                        answers.map((val,index)=>{
                            return <button key={index} className='answer-btn' onClick={() => correctAnswer(correct_answer === val)} dangerouslySetInnerHTML={{__html : val}}/>
                        })
                    }
                </div>
            </article>
            <button onClick={nextQuestion} className='next-question'>Next</button>
        </section>
    </main>
  )
}

export default QuizApp