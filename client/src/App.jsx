
import './App.css'
import {BrowserRouter as Router,Routes , Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register'; 
import Login from './pages/Login';
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true


function App() {


  return (
    <>
      <Routes>
        <Route path='/dashboard' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
