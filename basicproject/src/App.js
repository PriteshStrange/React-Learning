
import { Route, Switch } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from './NavBar';
import Home from './Home'
import Todo from './Todo';
import Weather from './Weather';
import Incdec from './Incdec';
import Foodsite from './FoodSite/Foodsite';

function App() {
  return (
    <>
   <NavBar/>
   <Switch>
     <Route exact path="/" component={Home}/>
     <Route exact path="/Todo" component={Todo}/>
     <Route exact path="/Weather" component={Weather}/>
     <Route exact path="/Incdec" component={Incdec}/>
     <Route exact path="/Foodsite" component={Foodsite}/>
   </Switch>
    </>
  );
}

export default App;
