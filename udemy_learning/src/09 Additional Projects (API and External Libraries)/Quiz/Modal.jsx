import React from 'react'
import { useGlobalContext } from './Context'

const Modal = () => {
  const {questions,correct,modal,closeModal} = useGlobalContext();

  return (
    <div className={`${modal ? 'modal-container isOpen' : 'modal-container'}`}>
      <div className='modal-content'>
        Hello
        <p>You answered of {((correct/questions.length)*100).toFixed()}% questions correctly</p>
        <button className='close-btn' onClick={closeModal}> Play Again</button>
      </div>
    </div>
  )
}

export default Modal