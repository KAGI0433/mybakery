import { Routes, Route } from "react-router-dom";
import {Home} from './component/Home'
import {About} from './component/About'

function App() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='about' element={<About/>}></Route>
   </Routes>
  );
}

export default App;
