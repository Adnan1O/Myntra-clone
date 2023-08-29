import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Admin from './components/Admin/Admin';
function App() {
  // const [men, setMen] = useState(false);
  // const [women, setWomen] = useState(false)
  // const [display, setDisplay]=useState(false)
  return (
    <div className="App">
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} />  
    <Route path='/admin' element={<Admin/>}/>
    </Routes>

    <Footer/>
    </div>
  );
}

export default App;
