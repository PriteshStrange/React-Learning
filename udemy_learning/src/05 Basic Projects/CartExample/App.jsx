import React from 'react'
import CartIndex from './CartIndex';
import { AppProvider } from './Context';

const App = () => {
  return (
      <AppProvider>
          <CartIndex/>
      </AppProvider>
  )
}

export default App