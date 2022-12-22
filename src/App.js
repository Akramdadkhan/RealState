import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';

function App() {
  return (
   <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/detail' element={<Detail></Detail>}></Route>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
