import React, { createContext } from 'react'
import Ex2 from './Ex2'

const Data = createContext()

const Ex1 = () => {
  return (
      <Data.Provider value={"John"}>
          <Ex2/>
      </Data.Provider>

  )
}

export default Ex1
export {Data}

