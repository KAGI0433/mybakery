import { Routes, Route } from "react-router-dom";
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import {Home} from './component/Home'
import {About} from './component/About'
import {Menu} from './component/Menu'
import Navbar from "./component/Navbar";
import { Footer } from "./component/Footer";


function App() {
  return (
   <>
   <Navbar/>
   
   <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='Menu' element={<Menu />}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App
