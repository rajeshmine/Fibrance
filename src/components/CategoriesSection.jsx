import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCategory } from '../redux/slices/categorySlice';
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
      name: 'Ready to wear',
      image: 'https://neidhal.com/cdn/shop/files/Bestseller.webp?v=1754368325&width=200',
      link: '/shop?category=Bestseller'
    },
  ]
const CategoriesSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCategoryClick = (cat) => {
    dispatch(setCategory(cat));
    navigate('/shop');
  };

  return (
    <section className="categories-section">
      <div className="categories-scroll-wrapper">
        <div className="categories-circles-row">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className="category-circle-card"
              aria-label={cat.name}
              onClick={() => handleCategoryClick(cat)}
              type="button"
            >
              <img src={cat.image} alt={cat.name} loading="lazy" />
              <span className="category-circle-label">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
