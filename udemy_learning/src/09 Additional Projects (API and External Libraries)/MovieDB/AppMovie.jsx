import React from 'react'
import IndexMovie from './IndexMovie'
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './Context';

const AppMovie = () => {
  return (
    <div>
        <AppProvider>
        <IndexMovie/>
        </AppProvider>
    </div>
  )
}

export default AppMovie