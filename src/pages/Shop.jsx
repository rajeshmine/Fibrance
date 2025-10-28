import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import Breadcrumb from '../components/Breadcrumb'
import { productsData } from '../data/products'
import './Shop.css'

function Shop({ onAddToCart, onToggleWishlist, isInWishlist }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedSort, setSelectedSort] = useState('default')
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    availability: [],
    occasions: [],
    fabrics: [],
    colors: [],
    priceRange: 'all'
  })

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Shop' }
  ]

  const categories = ['all', ...Array.from(new Set(productsData.map(p => p.category)))]

  // All options based on product data for dynamic filter rendering
  const uniqueValues = field => [
    ...new Set(productsData.map(product => product[field]).filter(Boolean))
  ]

  const filterOptions = {
    availability: ['In Stock', 'Out of Stock'],
    occasions: uniqueValues('occasion'),
    fabrics: uniqueValues('fabric'),
    colors: uniqueValues('color'),
    priceRanges: [
      { label: 'All Prices', value: 'all' },
      { label: 'Under $30', value: '0-30' },
      { label: '$30 - $50', value: '30-50' },
      { label: '$50 - $80', value: '50-80' },
      { label: 'Above $80', value: '80-999' }
    ]
  }

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => {
      const current = prev[filterType]
      if (Array.isArray(current)) {
        return {
          ...prev,
          [filterType]: current.includes(value)
            ? current.filter(item => item !== value)
            : [...current, value]
        }
      }
      return { ...prev, [filterType]: value }
    })
  }

  const clearAllFilters = () => {
    setFilters({
      availability: [],
      occasions: [],
      fabrics: [],
      colors: [],
      priceRange: 'all'
    })
    setSelectedCategory('all')
    setSearchQuery('')
  }

  const hasActiveFilters = () =>
    filters.availability.length > 0 ||
    filters.occasions.length > 0 ||
    filters.fabrics.length > 0 ||
    filters.colors.length > 0 ||
    filters.priceRange !== 'all' ||
    selectedCategory !== 'all' ||
    searchQuery !== ''

  // FILTER logic
  let filteredProducts = productsData.filter(product => {
    // search
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    // category
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false
    }

    // checkboxes
    // Availability
    if (filters.availability.length > 0) {
      if (
        (filters.availability.includes('In Stock') && product.inStock) ||
        (filters.availability.includes('Out of Stock') && !product.inStock)
      ) {
        // Matches
      } else {
        return false
      }
    }
    // Occasions
    if (filters.occasions.length > 0 && !filters.occasions.includes(product.occasion)) {
      return false
    }
    // Fabrics
    if (filters.fabrics.length > 0 && !filters.fabrics.includes(product.fabric)) {
      return false
    }
    // Color
    if (filters.colors.length > 0 && !filters.colors.includes(product.color)) {
      return false
    }
    // Price range
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number)
      if (product.price < min || product.price > max) {
        return false
      }
    }
    return true
  })

  // SORT logic
  if (selectedSort === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price)
  } else if (selectedSort === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price)
  } else if (selectedSort === 'name-az') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
  } else if (selectedSort === 'newest') {
    filteredProducts.sort((a, b) => b.id - a.id)
  }

  return (
    <div className="shop-container">
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="page-title">Shop</h1>

      <div className="shop-layout">
        {/* Filter Sidebar */}
        <aside className={`filter-sidebar ${showFilters ? 'active' : ''}`}>
          <div className="filter-header">
            <h2>Filter and sort</h2>
            <button 
              className="filter-close" 
              onClick={() => setShowFilters(false)}
              aria-label="Close filters"
            >
              ✕
            </button>
          </div>
          <div className="filter-count">
            {filteredProducts.length} products
          </div>
          {/* Availability Filter */}
          <div className="filter-section">
            <div className="filter-section-header">
              <span>Availability</span>
            </div>
            <div className="filter-checkboxes">
              {filterOptions.availability.map(option => (
                <label key={option} className="filter-checkbox-label">
                  <input
                    type="checkbox"
                    checked={filters.availability.includes(option)}
                    onChange={() => handleFilterChange('availability', option)}
                  /> 
                  {option}
                </label>
              ))}
            </div>
          </div>
          {/* Occasion Filter */}
          <div className="filter-section">
            <div className="filter-section-header">
              <span>Occasions</span>
            </div>
            <div className="filter-checkboxes">
              {filterOptions.occasions.map(option => (
                <label key={option} className="filter-checkbox-label">
                  <input
                    type="checkbox"
                    checked={filters.occasions.includes(option)}
                    onChange={() => handleFilterChange('occasions', option)}
                  /> 
                  {option}
                </label>
              ))}
            </div>
          </div>
          {/* Fabric Filter */}
          <div className="filter-section">
            <div className="filter-section-header">
              <span>Fabrics</span>
            </div>
            <div className="filter-checkboxes">
              {filterOptions.fabrics.map(option => (
                <label key={option} className="filter-checkbox-label">
                  <input
                    type="checkbox"
                    checked={filters.fabrics.includes(option)}
                    onChange={() => handleFilterChange('fabrics', option)}
                  /> 
                  {option}
                </label>
              ))}
            </div>
          </div>
          {/* Color Filter */}
          <div className="filter-section">
            <div className="filter-section-header">
              <span>Color</span>
            </div>
            <div className="filter-checkboxes">
              {filterOptions.colors.map(option => (
                <label key={option} className="filter-checkbox-label">
                  <input
                    type="checkbox"
                    checked={filters.colors.includes(option)}
                    onChange={() => handleFilterChange('colors', option)}
                  /> 
                  {option}
                </label>
              ))}
            </div>
          </div>
          {/* Price Filter */}
          <div className="filter-section">
            <div className="filter-section-header">
              <span>Price</span>
            </div>
            <div className="filter-checkboxes">
              {filterOptions.priceRanges.map(option => (
                <label key={option.value} className="filter-checkbox-label">
                  <input
                    type="radio"
                    name="price-range"
                    checked={filters.priceRange === option.value}
                    onChange={() => handleFilterChange('priceRange', option.value)}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
          {/* Sort By */}
          <div className="filter-section">
            <label className="filter-label">Sort by:</label>
            <select 
              className="filter-select"
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
            >
              <option value="default">Date, new to old</option>
              <option value="newest">Date, old to new</option>
              <option value="price-low">Price, low to high</option>
              <option value="price-high">Price, high to low</option>
              <option value="name-az">Alphabetically, A-Z</option>
              <option value="name-za">Alphabetically, Z-A</option>
            </select>
          </div>
          {/* Action Buttons */}
          <div className="filter-actions">
            <button className="btn-remove-all" onClick={clearAllFilters}>
              Remove all
            </button>
            <button className="btn-apply" onClick={() => setShowFilters(false)}>
              Apply
            </button>
          </div>
        </aside>

        {/* Mobile Filter Overlay */}
        {showFilters && (
          <div 
            className="filter-overlay" 
            onClick={() => setShowFilters(false)}
          />
        )}

        {/* Main Content */}
        <main className="shop-main">
          <div className="shop-controls">
            <button 
              className="btn btn-secondary mobile-filter-btn"
              onClick={() => setShowFilters(true)}
            >
              <span>🔍 Filter ({filteredProducts.length})</span>
            </button>
            <div className="shop-header-desktop">
              <input
                type="text"
                className="search-input"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="category-filter">
                <label>Category:</label>
                <select
                  className="filter-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat === 'all' ? 'All Categories' : cat}
                    </option>
                  ))}
                </select>
              </div>
              {hasActiveFilters() && (
                <button className="btn btn-secondary" onClick={clearAllFilters}>
                  Clear Filters
                </button>
              )}
            </div>
          </div>
          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  onToggleWishlist={onToggleWishlist}
                  isInWishlist={isInWishlist}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h2>No products found</h2>
              <p>Try adjusting your filters or search query.</p>
              <button className="btn btn-primary" onClick={clearAllFilters}>
                Clear All Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default Shop
