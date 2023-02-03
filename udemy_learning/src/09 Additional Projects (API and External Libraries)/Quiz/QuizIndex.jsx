import React from 'react'
import { AppProvider } from './Context'
import QuizApp from './QuizApp'

const QuizIndex = () => {
  return (
    <AppProvider>
        <QuizApp/>
    </AppProvider>
  )
}

export default QuizIndex