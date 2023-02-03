import React from 'react'
import { useGlobalContext } from './Context';

const SetupForm = () => {
  const {handleSubmit,handleChange,error,quiz} = useGlobalContext();
  return (
    <main>
      <section className='quiz quiz-small'>
        <form >
          <h2>Setup quiz</h2>
          <div className='form-control'>
            <label htmlFor='amount'>Number of Question</label>
            <input type='number' name='amount' id ='amount' className='form-input' onChange={handleChange} value={quiz.amount} min={1} max={50}/>
          </div>
          <div className='form-control'>
            <label htmlFor='category'>Category</label>
            <select name='category' id ='category' className='form-input' onChange={handleChange} value={quiz.category}>
              <option value='sports'>sports</option>
              <option value='history'>history</option>
              <option value='politics'>politics</option>
            </select>
            
          </div>

          <div className='form-control'>
            <label htmlFor='difficulty'>Difficulty</label>
            <select name='difficulty' id ='difficulty' className='form-input' onChange={handleChange} value={quiz.difficulty}>
              <option value='easy'>easy</option>
              <option value='medium'>medium</option>
              <option value='hard'>hard</option>
            </select>
            
          </div>
          {error && (<p className='error'>Something wen't wrong</p>)}
          <button type='submit' className='submit-btn' onClick={handleSubmit}>Start</button>
        </form>
      </section>
    </main>
  )
}

export default SetupForm