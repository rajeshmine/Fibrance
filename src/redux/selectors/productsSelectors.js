import { createSelector } from '@reduxjs/toolkit';

export const selectProductsByCategory = (category) =>
  createSelector(
    (state) => state.products,
    (products) => products
      .filter((product) => product.category === category)
      .slice(0, 5) // get first 5 results only
  );
