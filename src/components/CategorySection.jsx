import React from 'react';
import './CategorySection.css';

const categories = [
  {
    name: "Salwar Materials",
    image: "https://cdn.pixabay.com/photo/2015/07/15/16/52/salwar-kameez-846702_1280.jpg",
  },
  {
    name: "New Arrivals",
    image: "https://cdn.pixabay.com/photo/2022/08/23/09/17/wedding-7405415_1280.jpg",
  },
  {
    name: "Best Sellers",
    image: "https://cdn.pixabay.com/photo/2025/10/06/09/01/srishti-textile-9876599_1280.jpg",
  },
  {
    name: "Sarees",
    image: "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg",
  },
];

const CategorySection = () => {
  return (
    <div className="category-section">
      <div className="category-grid">
        {categories.map((cat, idx) => (
          <div key={idx} className="category-item">
            <img src={cat.image} alt={cat.name} className="category-image" />
            <span className="category-label">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;