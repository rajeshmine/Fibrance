import React from 'react';
import Navbar from './components/NavBar';
import CategorySection from './components/CategorySection';
import MultiCarousel from './components/MultiCarousel';
import HeroBannerCarousel from './components/HeroBannerCarousel';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <CategorySection />
      <section>
        <HeroBannerCarousel />
      </section>
      <MultiCarousel />
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;