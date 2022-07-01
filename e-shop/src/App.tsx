import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './stylesheet/style.scss';
import Header from './app/shared/components/layout/Header';
import Footer from './app/shared/components/layout/Footer';
import Home from './app/pages/home';
import Cart from './app/pages/cart';
import keyList from './app/shared/constants/keyList';
import { setStorage, getStorage } from './app/shared/helper/data';
import productData from './app/shared/constants/product-data';
import { ICartItem, ICartList } from './app/shared/interfaces/cart-interface';

function App() {
  
  
  useEffect(() => {
    setStorage('product-list', productData);
    // cartList = getStorage(keyList.cartList) || {};
  },[]);

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
