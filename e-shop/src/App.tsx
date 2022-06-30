import React from 'react';
import logo from './logo.svg';
import './App.css';
import './stylesheet/style.scss';
import Header from './app/shared/components/layout/Header';
import Footer from './app/shared/components/layout/Footer';
import Home from './app/pages/home/Home';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
