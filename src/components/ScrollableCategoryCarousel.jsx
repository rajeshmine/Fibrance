import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import './ScrollableCategoryCarousel.css';

const ScrollableCategoryCarousel = ({ header, images }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (productId) => {
    dispatch(addToCart({ productId, quantity: 1 }));
  };

  return (
    <div className="carousel-container">
     <div className="carousel-header-container">
  <h2 className="carousel-header" title={header}>{header}</h2>
  <a
    href="#"
    className="carousel-view-all"
    onClick={(e) => {
      e.preventDefault();
      // Add your "view all" navigation logic here
      console.log('View All clicked for', header);
    }}
  >
    View All
  </a>
</div>
      <div className="carousel-scroll">
        {images.map(({ id, image, name, price }) => (
          <div key={id} className="carousel-item">
            <img src={image} alt={name} className="carousel-image" />
            <h3 className="carousel-title" title={name}>{name}</h3>
            <div className="price-addcart-container">
              <p className="carousel-price">₹{price.toFixed(2)}</p>
              <button
                className="carousel-add-to-cart-btn"
                onClick={() => handleAddToCart(id)}
                aria-label={`Add ${name} to Cart`}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableCategoryCarousel;
