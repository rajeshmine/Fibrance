import React from 'react';
import './App.css';

function Product({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <div className="product-price">{product.price}</div>
    </div>
  );
}

export default Product;
