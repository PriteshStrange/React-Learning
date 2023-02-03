import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About';
import Dashbord from './Dashbord';
import Error from './Error';
import Home from './Home'
import Login from './Login';
import Product from './Product';
import Protected from './Protected';
import SharedLayout from './SharedLayout';
import SharedProduct from './SharedProduct';
import SingleProduct from './SingleProduct';

const Index = () => {
  const [user,setUser] = useState(null)
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<SharedLayout/>}>
            <Route index element={<Home/>}/>

            <Route path='/product' element={<SharedProduct/>}>
              <Route index element={<Product/>}/>
              <Route path=':productId' element={<SingleProduct/>}/>
            </Route>

            <Route path='/about' element={<About/>}/>
            
            <Route path='/dashbord' element={
                  <Protected user={user}>
                    <Dashbord user={user}/>
                  </Protected>
            }/>
            <Route path='/login' element={<Login setUser={setUser}/>}/>
            <Route path='*' element={<Error/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Index