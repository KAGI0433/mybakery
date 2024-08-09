import { Routes, Route } from "react-router-dom";
import './App.css'
import {Home} from './component/Home'
import {About} from './component/About'
import {Menu} from './component/Menu'
import {  Navigation } from "./component/Navigation";


function App() {
  return (
   <>
   <Navigation/>
   <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='Menu' element={<Menu />}></Route>
    </Routes></>
  );
}

export default App
