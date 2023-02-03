import React from 'react'
import Dashbord from './Pages/Dashbord'
import Error from './Pages/Error'
import Login from './Pages/Login'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

const GitUserApp = () => {
  return (
    <div>   
        <Router>
            <Switch>

            <Route exact path="/"><Dashbord/></Route>
            <Route path="/login"><Login/></Route>
            <Route path="*"><Error/></Route>
            </Switch>
        </Router>
    </div>
  )
}

export default GitUserApp

