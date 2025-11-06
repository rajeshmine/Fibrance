import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Home.css'
import Carousel from '../components/Carousel'
import ScrollableCategoryCarousel from '../components/ScrollableCategoryCarousel'
import { useDispatch, useSelector } from 'react-redux';
import { selectProductsByCategory } from '../redux/selectors/productsSelectors';
import FeaturesSection from '../components/FeaturesSection'
import CategoriesSection from '../components/CategoriesSection';
import banner1 from '../data/images/banner1.png';
import banner2 from '../data/images/banner2.png';
import BoutiqueCard from '../components/BoutiqueCard'


function Home() {
  

  const newArrivalsImags = useSelector(selectProductsByCategory('newArrival'));
  const bestSellerImages = useSelector(selectProductsByCategory('bestSeller'));
  const uniqueImages = useSelector(selectProductsByCategory('unique'));

  const carouselImages = [
    {
      url: banner1,
      alt: 'Women Fashion Collection',
      caption: 'New Women Collection',
      description: 'Discover the latest trends'
    },
    {
      url: banner2,
      alt: 'Women Fashion Collection',
      caption: 'New Women Collection',
      description: 'Discover the latest trends'
    },

  ]

   

  return (
    <>
      <CategoriesSection />


      {/* Carousel Section */}
      <section className="carousel-section">
        <Carousel images={carouselImages} autoPlay={true} interval={4000} />
      </section>
      <section>
        <ScrollableCategoryCarousel
          header="New Arrivals"
          images={newArrivalsImags}
          headerStyle={{ color: '#333' }}
        />
      </section>
      <section className="">
        <BoutiqueCard />
      </section>

      <section>
        <ScrollableCategoryCarousel
          header="Bestseller"
          images={bestSellerImages}
          headerStyle={{ color: '#333' }}
        />
      </section>
      <section className="responsive-image-section">
        <img
          src="https://neidhal.com/cdn/shop/files/New_Arrivals_DK.webp?v=1761239088&width=2000"
          alt="New Arrivals"
        />
      </section>
      <section>
        <ScrollableCategoryCarousel
          header="Rare & Unique"
          images={uniqueImages}
          headerStyle={{ color: '#333' }}
        />
      </section>



      <FeaturesSection />
      {/* Features Section */}

    </>
  )
}

export default Home
