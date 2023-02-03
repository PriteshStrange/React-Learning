import React from 'react'
import { AppProvider } from './Context/Context'
import GitUserApp from './GitUserApp'


const GitUserIndex = () => {
  return (
      <AppProvider>
        <GitUserApp/>
      </AppProvider>
  )
}

export default GitUserIndex