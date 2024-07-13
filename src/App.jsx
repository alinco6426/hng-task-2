import Home from './views/Home';
import Cart from './views/Cart';
import CheckOut from './views/CheckOut';
import ProductDetails from './views/ProductDetails';
import { Routes , Route } from 'react-router-dom';
import Cartt from './views/Cartt';



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
      <Route path='/cartt' element={<Cartt/>}></Route>
      <Route path='/product-details/:slug_name' element={<ProductDetails/>}></Route>
    </Routes>
    </>
  )
}

export default App
