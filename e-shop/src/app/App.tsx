import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../stylesheet/style.scss';
import { Header, Footer } from './shared/components/layout';
import Home from './pages/home';
import Cart from './pages/cart';
import Register from './pages/register';
import { getProducts, getCategories } from './pages/home/home.actions';

const App: React.FC = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getProducts());
    dispatch<any>(getCategories());
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
