import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategorySection from './components/CategorySection';
import MultiCarousel from './components/MultiCarousel';
import HeroBannerCarousel from './components/HeroBannerCarousel';
import Home from './pags/Home';
import ProductDetailsPage from './pags/ProductDetailsPage';
import ProductListPage from './pags/ProductListPage';
import Footer from './components/Footer';
import Navbar from './components/NavBar';

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
