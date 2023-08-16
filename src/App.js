
//import { useState } from 'react';
import './App.css';
import Category from './components/Category/Category';
import Men from './components/Category/Men';
import Women from './components/Category/Women';
import Footer from './components/Footer/Footer';
import Hero from './components/Home/Hero';
import Navbar from "./components/Navbar/Navbar"

function App() {
  // const [men, setMen] = useState(false);
  // const [women, setWomen] = useState(false)
  // const [display, setDisplay]=useState(false)
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <Category/>
    <Men/>
    <Women/>
    <Footer/>
    </div>
  );
}

export default App;
