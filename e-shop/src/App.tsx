import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import './stylesheet/style.scss';
import Header from './app/shared/components/layout/Header';
import Footer from './app/shared/components/layout/Footer';
import Home from './app/pages/home';
import Cart from './app/pages/cart';

const App: React.FC = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
