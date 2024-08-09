import { Routes, Route } from "react-router-dom";
import {Home} from './component/Home'
import {About} from './component/About'
import {Menu} from './component/Menu'
function App() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='about' element={<About/>}></Route>
    <Route path= 'Menu' element={<Menu/>}></Route>
   </Routes>
  );
}

export default App;
