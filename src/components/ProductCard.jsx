import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({ product, onAddToCart, onToggleWishlist, isInWishlist }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card-img-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-img"
          loading="lazy"
        />
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <button
          className={`wishlist-btn${isInWishlist(product.id) ? ' active' : ''}`}
          onClick={e => {
            e.preventDefault()
            onToggleWishlist(product.id)
          }}
          aria-label={isInWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
          tabIndex={0}
        >
          {isInWishlist(product.id) ? '♥' : '♡'}
        </button>
      </Link>
      <div className="product-name" title={product.name}>
        {product.name}
      </div>
      <div className="product-meta-row">
        <div className="product-price">
          ₹ {product.price.toLocaleString('en-IN')}
        </div>
        <button
          className="btn-add-cart"
          onClick={() => onAddToCart(product.id)}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
