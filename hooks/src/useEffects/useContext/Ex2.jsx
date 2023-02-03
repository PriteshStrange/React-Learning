import React, { createContext } from 'react'
import Ex3 from './Ex3'

const ExternalData = createContext();

const Ex2 = () => {
  return (
      <>
      <ExternalData.Provider value={"not good"}>
      <Ex3/>
      </ExternalData.Provider>
      </>
  )
}

export default Ex2
export {ExternalData}