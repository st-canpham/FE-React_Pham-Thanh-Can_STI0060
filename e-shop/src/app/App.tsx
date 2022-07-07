import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../stylesheet/style.scss';
import { Header, Footer } from './shared/components/layout';
import Home from './pages/home';
import Cart from './pages/cart';
import Register from './pages/register';
import ScrollToTop from './shared/components/partials/ScrollToTop';
import { getProducts } from './pages/home/home.actions';

const App: React.FC = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getProducts());
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header/>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </ScrollToTop>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
