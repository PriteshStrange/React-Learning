import React, { useRef,useEffect } from 'react'

const Useref = () => {
    const refContainer = useRef(null);
    const submitForm = (e) =>{
        e.preventDefault();
        console.log(refContainer.current.type);
    }
    useEffect(()=>{
        console.log(refContainer.current);
        refContainer.current.focus()
    })
  return (
    <>
        <form onSubmit={submitForm}>
            <div>
                <input type='text' name='hello' ref={refContainer}/><br></br>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </>
  )
}

export default Useref