import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './stylesheet/style.scss';
import { Header, Footer } from './app/shared/components/layout';
import Home from './app/pages/home';
import Cart from './app/pages/cart';
import Register from './app/pages/register';
import ScrollToTop from './app/shared/components/partials/ScrollToTop';
import { getProducts } from './app/pages/home/product.actions';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getProducts());
  }, []);

  return (
    <>
      <Header/>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </ScrollToTop>
      <Footer/>
    </>
  );
};

export default App;
