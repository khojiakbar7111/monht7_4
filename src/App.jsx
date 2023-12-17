


import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { tryTotal } from './features/cartslice';

function App() {
  const  {items} = useSelector((state) => state.cart)
const dispatch = useDispatch();

useEffect(() => {
  dispatch(tryTotal())
// eslint-disable-next-line react-hooks/exhaustive-deps
},[items])

    return (
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </>
    )
  }


export default App
