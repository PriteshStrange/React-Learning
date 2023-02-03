import React from "react";
import { Route, Switch, BrowserRouter,Routes, Router } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import SingleCoktail from "./Pages/SingleCoktail";
import Navbar from "./Component/Navbar";
import Error from "./Pages/Error";

const IndexCoktails = () => {

  return (

    <Routes>
      <Navbar />

      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/coktail/:id' element={<SingleCoktail/>}/>
      <Route path='*' element={<Error/>}/>

    </Routes>

);
};

export default IndexCoktails;
// Using react router dom version 5.3.4
{/* <BrowserRouter>
<Navbar />

<Route exact path="/" component={Home} />
<Route exact path="/about" component={About} />
<Route exact path="/coktail/:id" component={SingleCoktail} />
<Route exact path="*" component={Error} />

</BrowserRouter> */}
