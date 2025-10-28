import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Carousel from '../components/Carousel'
import ScrollableCategoryCarousel from '../components/ScrollableCategoryCarousel'
import { useSelector } from 'react-redux';
import { selectProductsByCategory } from '../redux/selectors/productsSelectors';
import FeaturesSection from '../components/FeaturesSection'

function Home() {
const newArrivalsImags = useSelector(selectProductsByCategory('New Arrival'));
const bestSellerImages = useSelector(selectProductsByCategory('Bestseller'));
const sareesImages = useSelector(selectProductsByCategory('Sarees'));



  const carouselImages = [
    {
      url: 'https://neidhal.com/cdn/shop/files/Think_Salwar_Think_Neidhal_DK.webp?v=1761239039&width=2000',
      alt: 'Women Fashion Collection',
      caption: 'New Women Collection',
      description: 'Discover the latest trends'
    },
    {
      url: 'https://neidhal.com/cdn/shop/files/Rare_and_Unique_DK.webp?v=1761239026&width=2000',
      alt: 'Women Fashion Collection',
      caption: 'New Women Collection',
      description: 'Discover the latest trends'
    },

  ]
  const categories = [
    {
      name: 'New Arrival',
      image: 'https://neidhal.com/cdn/shop/files/Newarrival.webp?v=1761239004&width=200',
      link: '/shop?category=New%20Arrival'
    },
    {
      name: 'Salwar Materials',
      image: 'https://neidhal.com/cdn/shop/files/Salwarmaterial.webp?v=1761239010&width=200',
      link: '/shop?category=Salwar%20Materials'
    },
    {
      name: 'Rare and Unique',
      image: 'https://neidhal.com/cdn/shop/files/Rarenunique.webp?v=1755163538&width=200',
      link: '/shop?category=Rare%20and%20Unique'
    },
    {
      name: 'Bestseller',
      image: 'https://neidhal.com/cdn/shop/files/Bestseller.webp?v=1754368325&width=200',
      link: '/shop?category=Bestseller'
    },
    {
      name: 'Sarees',
      image: 'https://neidhal.com/cdn/shop/files/Sarees.webp?v=1761239019&width=200',
      link: '/shop?category=Sarees'
    }
  ]
  return (
    <>
      <section className="categories-section">

        <div className="categories-scroll-wrapper">
          <div className="categories-circles-row">
            {categories.map(cat => (
              <a
                key={cat.name}
                href={cat.link}
                className="category-circle-card"
                aria-label={cat.name}
              >
                <img src={cat.image} alt={cat.name} loading="lazy" />
                <span className="category-circle-label">{cat.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

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
          header="Sarees"
          images={sareesImages}
          headerStyle={{ color: '#333' }}
        />
      </section>
      <FeaturesSection />
      {/* Features Section */}

    </>
  )
}

export default Home
