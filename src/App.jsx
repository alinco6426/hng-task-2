import Home from './views/Home';
import Cart from './views/Cart';
import CheckOut from './views/CheckOut';
import { Routes , Route } from 'react-router-dom';
import NavBar from './components/NavBar';

import './App.css'
// import NavBar from './components/NavBar';



function App() {
   return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/checkout' element={<CheckOut/>}></Route>
    </Routes>
    </>
  )
}

export default App
