import React from 'react'
import Heading from './Heading'
import ManageDate from './ManageDate'
import List from './list'
import {add,sub,multi,div} from './Calc'

const App = () => {
  return (
    <>
    <Heading/>
    <ManageDate/>
    <List/>
    
      <ul>
      <li>Sum of Value is {add(40,3)}</li>
      <li>Sub of Value is {sub(40,3)}</li>
      <li>Multi of Value is {multi(40,3)}</li>
      <li>Divi of Value is {div(40,3)}</li>
    </ul>
    
    </>
    
  )
}

export default App