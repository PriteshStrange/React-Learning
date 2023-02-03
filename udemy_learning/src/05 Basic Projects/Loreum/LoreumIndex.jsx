import React from 'react'
import { useState } from 'react';
import Text from './Text'

const LoreumIndex = () => {
    const [count,setCount] = useState(0);
    const [text,setText] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        let amount = parseInt(count);
        if(count <=0){
            amount = 1
        }
        if(count > 5){
            amount = 6
        }
        setText(Text.slice(0,amount));
    }

  return (
    <section className='section-center'>
        <h3>Loreum Example</h3>
        <form className='lorem-form' onSubmit={handleSubmit}>
            <label htmlFor='amount'> Entrer Value</label>
            <input type="number" name="amount" value={count} onChange={(e) => setCount(e.target.value)}/>
            <button type='submit' className='btn'>Add</button>
        </form>
        <article className='lorem-text'>
            <p>hello</p>
            {
                text.map((item,Index)=>{
                    return (
                        <p key={Index}>{item}</p>
                    )
                })
            }
        </article>
    </section>
  )
}

export default LoreumIndex