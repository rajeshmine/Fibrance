import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import { productsData } from '../data/products'
import './ProductDetails.css'
function ProductDetails({ onAddToCart, onToggleWishlist, isInWishlist }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)
  
  const product = productsData.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="shop-container">
        <h2>Product not found</h2>
        <button className="btn btn-primary" onClick={() => navigate('/shop')}>
          Back to Shop
        </button>
      </div>
    )
  }

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: product.name }
  ]

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product.id)
    }
  }

  const relatedProducts = productsData
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="shop-container">
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="product-details">
        <div className="product-details-image">
          <img src={product.image} alt={product.name} />
          <span className="product-badge">{product.badge}</span>
        </div>
        
        <div className="product-details-info">
          <div className="product-category">{product.category}</div>
          <h1 className="product-details-name">{product.name}</h1>
          
          <div className="product-rating">
            <span className="stars">
              {'★'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
            </span>
            <span className="rating-count">({product.reviews} reviews)</span>
          </div>
          
          <div className="product-price">
            <span className="current-price">${product.price.toFixed(2)}</span>
            <span className="original-price">${product.originalPrice.toFixed(2)}</span>
            <span className="discount-badge">
              {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
            </span>
          </div>
          
          <div className="product-description">
            <p>{product.description}</p>
          </div>
          
          <div className="product-actions-group">
            <div className="quantity-selector">
              <label>Quantity:</label>
              <div className="quantity-controls">
                <button 
                  className="qty-btn" 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input 
                  type="number" 
                  className="qty-input" 
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                />
                <button 
                  className="qty-btn" 
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="action-buttons">
              <button 
                className="btn btn-primary btn-large" 
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button 
                className={`btn btn-secondary ${isInWishlist(product.id) ? 'in-wishlist' : ''}`}
                onClick={() => onToggleWishlist(product.id)}
              >
                {isInWishlist(product.id) ? '❤️ In Wishlist' : '🤍 Add to Wishlist'}
              </button>
            </div>
          </div>
          
          <div className="product-meta">
            <div className="meta-item">
              <strong>SKU:</strong> FL-{product.id.toString().padStart(4, '0')}
            </div>
            <div className="meta-item">
              <strong>Category:</strong> {product.category}
            </div>
            <div className="meta-item">
              <strong>Availability:</strong> <span className="in-stock">In Stock</span>
            </div>
          </div>
        </div>
      </div>
      
      {relatedProducts.length > 0 && (
        <div className="related-products">
          <h2>Related Products</h2>
          <div className="products-grid">
            {relatedProducts.map(p => (
              <div key={p.id} className="product-card" onClick={() => navigate(`/product/${p.id}`)}>
                <div className="product-image">
                  <img src={p.image} alt={p.name} />
                </div>
                <div className="product-info">
                  <div className="product-name">{p.name}</div>
                  <div className="product-price">
                    <span className="current-price">${p.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetails
