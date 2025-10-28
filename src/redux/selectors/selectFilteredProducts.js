// src/selectors/selectFilteredProducts.js
import { createSelector } from '@reduxjs/toolkit';

export const selectFilteredProducts = createSelector(
  (state) => state.products,
  (state) => state.filters,
  (products, filters) => {
    return products.filter((product) => {
      // Filter by availability
      if (filters.availability === 'inStock' && !product.inStock) return false;
      if (filters.availability === 'outOfStock' && product.inStock) return false;

      // Filter by occasions
      if (filters.occasions.length > 0 && !filters.occasions.includes(product.occasion)) {
        return false;
      }

      // Filter by fabrics
      if (filters.fabrics.length > 0 && !filters.fabrics.includes(product.fabric)) {
        return false;
      }

      // Filter by colors
      if (filters.colors.length > 0 && !filters.colors.includes(product.color)) {
        return false;
      }

      // Filter by price range
      if (product.price < filters.priceRange.from || product.price > filters.priceRange.to) {
        return false;
      }

      return true;
    });
  }
);
