import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Modules/Main Components/Header/Header';
import Home from './Modules/Sub Components/Home/Home';
import ProductView from './Modules/Sub Components/Product View/ProductView';
import AboutUs from './Modules/Sub Components/About us/AboutUs';


function App() {
  return (
    <div className="App">
      <div className="starry-line-bg">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/product/:index" element={<ProductView />} />
      </Routes>
      
    </div>
  );
}

export default App;
