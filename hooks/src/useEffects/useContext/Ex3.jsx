import React, { useContext } from 'react'
import {Data} from "./Ex1"
import { ExternalData } from './Ex2'

const Ex3 = () => {
    const context = useContext(Data)
    const exData = useContext(ExternalData)
    
  return (
    <h1>Hello world this is {context} and {exData}</h1>
  )
}

export default Ex3