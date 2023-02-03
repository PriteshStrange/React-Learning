import React,{useEffect} from 'react'

const Model = ({modelContent,closeModel}) => {
    useEffect(()=>{
        setTimeout(()=>{
            closeModel()
        },3000)
    })
  return (
    <div>{modelContent}</div>
  )
}

export default Model