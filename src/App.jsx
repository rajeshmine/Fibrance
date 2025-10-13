import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CategorySection from './components/CategorySection';
import MultiCarousel from './components/MultiCarousel';
import HeroBannerCarousel from './components/HeroBannerCarousel';
import Footer from './components/Footer';
import Home from './pags/Home';
import ProductDetailsPage from './pags/ProductDetailsPage';
import ProductListPage from './pags/ProductListPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/products/:category" element={<ProductListPage />} />
        <Route path="/products/details/:id" element={<ProductDetailsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
