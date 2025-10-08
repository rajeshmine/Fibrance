import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <header className="header">
        <div className="container header-container">
          <h1 className="logo">Neidhal</h1>
          <nav className="nav">
            <NavLink to="/" className={({ isActive }) => isActive ? "navlink active" : "navlink"} end>Home</NavLink>
            <NavLink to="/collections" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>Collections</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>About Us</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>Contact</NavLink>
          </nav>
        </div>
      </header>

      <main className="container main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:productId" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
