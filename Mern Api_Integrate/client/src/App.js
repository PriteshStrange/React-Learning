import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashbord from './Pages/Dashbord';
import AddProduct from './Pages/AddProduct';

function App() {
    return (
      <div>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashbord/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/addProduct" element={<AddProduct/>}/>
            <Route path="/edit/:id" element={<AddProduct/>}/>
          </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
