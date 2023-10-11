import './App.css';
import React, { useEffect } from 'react'
import Footer from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import { useUserAuth } from './components/StateProvider/UserAuthContext';
import Otp from './components/Login/Otp';
import Bag from './components/Bag/Bag';
import Wishlist from './components/Wishlist/Wishlist';
import Shirt from './components/Clothing/Shirt';
import Singleproduct from './components/Singleproduct/Singleproduct';

function App() {
  // const [men, setMen] = useState(false);
  // const [women, setWomen] = useState(false)
  // const [display, setDisplay]=useState(false)
//const {user} = useUserAuth()

  return (
    <div className="App">
    
    <Routes>
    <Route path="/navbar" element={<Navbar/>} />   
    <Route path="/" element={<Home/>} />  
    <Route path="/login" element={<Login/>} /> 
    <Route path='/mobile' element={<Otp/>} />
    <Route path="/register" element={<Register/>} />  
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/bag' element={<Bag/>}/>
    <Route path='/Wishlist' element={<Wishlist/>}/>
    <Route path='/shirt' element={<Shirt/>}/>
    <Route path='/singleproduct/:id' element={<Singleproduct/>}/>
    </Routes>
    </div>
  );
}

export default App;
