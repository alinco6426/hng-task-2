import Home from './views/Home';
import Cart from './views/Cart';
import CheckOut from './views/CheckOut';
// import Fetch 
import { Routes , Route } from 'react-router-dom';
// import Right from './views/Right';

import Right from './views/Right';
import './App.css'



function App() {
   return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/checkout' element={<CheckOut/>}></Route>
      <Route path='/right' element={<Right/>}></Route>
      {/* <Route path='/fetchProduct' element={<FetchProducts/>}></Route> */}
    </Routes>
    </>
  )
}

export default App
