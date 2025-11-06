import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from '../components/ProductCard'
import Breadcrumb from '../components/Breadcrumb'
import { selectFilteredProducts } from '../redux/selectors/selectFilteredProducts'
import {
  setSearchQuery,
  setCategory,
  setAvailability,
  setFabrics,
  setColors,
  setPriceRange,
  toggleBooleanFilter, // assumed action to toggle boolean filter keys
  setSortOrder,
  clearAllFilters
} from '../redux/slices/filterSlice' // your filter slice actions
import './Shop.css'


function Shop({ onAddToCart, onToggleWishlist, isInWishlist }) {

  const dispatch = useDispatch()

  // Get filtered products from Redux selector
  const filteredProducts = useSelector(selectFilteredProducts)

  // Get current filter state from Redux
  const filters = useSelector(state => state.filters)
  const { searchQuery, category, availability, fabrics, colors, priceRange, budget, premium, exclusive,
    handpicked, bestSeller, unique, newArrival, sortOrder } = filters

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Products' }
  ]

  const categoryOptions = [
    { id: 'all', name: 'All Categories' },
    { id: 'ready-to-wear', name: 'Ready to Wear' },
    { id: 'salwar-materials', name: 'Salwar Materials' }
  ]

  const filterOptions = {
    availability: ['inStock', 'outOfStock'],
    fabrics: [...new Set(filteredProducts.flatMap(p => p.material ? [p.material] : []))],
    colors: [...new Set(filteredProducts.flatMap(p => p.colors))],
    priceRanges: [
      { label: 'All Prices', from: 0, to: Infinity, value: 'all' },
      { label: 'Under ₹30', from: 0, to: 30, value: '0-30' },
      { label: '₹30 - ₹50', from: 30, to: 50, value: '30-50' },
      { label: '₹50 - ₹80', from: 50, to: 80, value: '50-80' },
      { label: 'Above ₹80', from: 80, to: Infinity, value: '80+' }
    ],
    booleanFilters: [
      { key: 'budget', label: 'Budget', value: budget },
      { key: 'premium', label: 'Premium', value: premium },
      { key: 'exclusive', label: 'Exclusive', value: exclusive },
      { key: 'handpicked', label: 'Handpicked', value: handpicked },
      { key: 'bestSeller', label: 'Best Seller', value: bestSeller },
      { key: 'unique', label: 'Unique', value: unique },
      { key: 'newArrival', label: 'New Arrival', value: newArrival }
    ]
  }

  // Handlers dispatching Redux actions
  const handleSearchChange = (e) => dispatch(setSearchQuery(e.target.value))
  const handleCategoryChange = (e) => dispatch(setCategory(e.target.value))

  const handleAvailabilityChange = val => dispatch(setAvailability(val))

  const handleFabricToggle = (fabric) => {
    let newFabrics = fabrics.includes(fabric)
      ? fabrics.filter(f => f !== fabric)
      : [...fabrics, fabric]
    dispatch(setFabrics(newFabrics))
  }

  const handleColorToggle = (color) => {
    let newColors = colors.includes(color)
      ? colors.filter(c => c !== color)
      : [...colors, color]
    dispatch(setColors(newColors))
  }

  const handlePriceRangeChange = (value) => {
    let selectedRange = filterOptions.priceRanges.find(range => range.value === value)
    if (selectedRange) {
      dispatch(setPriceRange({ from: selectedRange.from, to: selectedRange.to }))
    }
  }

  const handleBooleanFilterToggle = (key) => {
    dispatch(toggleBooleanFilter(key))
  }

  const handleSortChange = (e) => dispatch(setSortOrder(e.target.value))

  const handleClearAll = () => dispatch(clearAllFilters())

  // Assume showFilters UI state locally for filter sidebar toggle
  const [showFilters, setShowFilters] = React.useState(false)

  return (
    <div className="shop-container">
      <div className='shop-breadcrumb-div'>
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="page-title">Salwar Materials & Ready to wear Products</h1>
      </div>
      <div className="shop-layout">
        <aside className={`filter-sidebar ${showFilters ? 'active' : ''}`}>
          <div className="filter-header">
            <h2>Filter and sort</h2>
            <button className="filter-close" onClick={() => setShowFilters(false)} aria-label="Close filters">✕</button>
          </div>
          <div className="filter-count">{filteredProducts.length} products</div>

          {/* Availability Filter */}
          <div className="filter-section">
            <div className="filter-section-header"><span>Availability</span></div>
            <div className="filter-checkboxes">
              {filterOptions.availability.map(option => (
                <label key={option} className="filter-checkbox-label">
                  <input
                    type="radio"
                    name="availability"
                    checked={availability === option}
                    onChange={() => handleAvailabilityChange(option)}
                  />
                  {option === 'inStock' ? 'In Stock' : 'Out of Stock'}
                </label>
              ))}
            </div>
          </div>

          {/* Fabrics */}
          <div className="filter-section">
            <div className="filter-section-header"><span>Fabrics</span></div>
            <div className="filter-checkboxes">
              {filterOptions.fabrics.map(fabric => (
                <label key={fabric} className="filter-checkbox-label">
                  <input
                    type="checkbox"
                    checked={fabrics.includes(fabric)}
                    onChange={() => handleFabricToggle(fabric)}
                  />
                  {fabric}
                </label>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="filter-section">
            <div className="filter-section-header"><span>Colors</span></div>
            <div className="filter-checkboxes">
              {filterOptions.colors.map(color => (
                <label key={color} className="filter-checkbox-label">
                  <input
                    type="checkbox"
                    checked={colors.includes(color)}
                    onChange={() => handleColorToggle(color)}
                  />
                  {color}
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="filter-section">
            <div className="filter-section-header"><span>Price</span></div>
            <div className="filter-checkboxes">
              {filterOptions.priceRanges.map(({ value, label }) => (
                <label key={value} className="filter-checkbox-label">
                  <input
                    type="radio"
                    name="price-range"
                    checked={priceRange.from === filterOptions.priceRanges.find(r => r.value === value)?.from &&
                      priceRange.to === filterOptions.priceRanges.find(r => r.value === value)?.to}
                    onChange={() => handlePriceRangeChange(value)}
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>

          {/* Boolean Filters */}
          {filterOptions.booleanFilters.map(({ key, label, value }) => (
            <div key={key} className="filter-section">
              <label className="filter-checkbox-label">
                <input
                  type="checkbox"
                  checked={value === true}
                  onChange={() => handleBooleanFilterToggle(key)}
                />
                {label}
              </label>
            </div>
          ))}

          {/* Sort By */}
          <div className="filter-section">
            <label className="filter-label">Sort by:</label>
            <select className="filter-select" value={sortOrder} onChange={handleSortChange}>
              <option value="default">Date, new to old</option>
              <option value="newest">Date, old to new</option>
              <option value="price-low">Price, low to high</option>
              <option value="price-high">Price, high to low</option>
              <option value="name-az">Alphabetically, A-Z</option>
              <option value="name-za">Alphabetically, Z-A</option>
            </select>
          </div>

          {/* Actions */}
          <div className="filter-actions">
            <button className="btn-remove-all" onClick={handleClearAll}>Remove all</button>
            <button className="btn-apply" onClick={() => setShowFilters(false)}>Apply</button>
          </div>
        </aside>

        {showFilters && <div className="filter-overlay" onClick={() => setShowFilters(false)} />}

        <main className="shop-main">
          <div className="shop-controls">
            <button className="btn btn-secondary mobile-filter-btn" onClick={() => setShowFilters(true)}>
              <span>🔍 Filter ({filteredProducts.length})</span>
            </button>
            <div className="shop-header-desktop">
              <input
                type="text"
                className="search-input"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <div className="category-filter">
                <label>Category:</label>
                <select className="filter-select" value={category} onChange={handleCategoryChange}>
                  {categoryOptions.map(({ id, name }) => (
                    <option key={id} value={id}>{name}</option>
                  ))}
                </select>
              </div>
              {(availability || fabrics.length > 0 || colors.length > 0 || priceRange.from !== 0 || priceRange.to !== Infinity ||
                budget || premium || exclusive || handpicked || bestSeller || unique || newArrival) && (
                  <button className="btn btn-secondary" onClick={handleClearAll}>Clear Filters</button>
                )}
            </div>
          </div>

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
              <button className="btn btn-primary" onClick={handleClearAll}>Clear All Filters</button>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default Shop
