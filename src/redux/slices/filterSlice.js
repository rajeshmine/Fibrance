// src/slices/filterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  availability: null, // 'inStock' or 'outOfStock'
  occasions: [],      // Array of strings, e.g. ["Daily Wear", "Party"]
  fabrics: [],        // Array of strings, e.g. ["Cotton", "Silk"]
  colors: [],         // Array of strings, e.g. ["Pink", "Blue"]
  priceRange: { from: 0, to: 5200 }, // price range filter
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setAvailability(state, action) {
      state.availability = action.payload; // 'inStock' or 'outOfStock' or null
    },
    setOccasions(state, action) {
      state.occasions = action.payload; // array of selected occasions
    },
    setFabrics(state, action) {
      state.fabrics = action.payload; // array of selected fabrics
    },
    setColors(state, action) {
      state.colors = action.payload; // array of selected colors
    },
    setPriceRange(state, action) {
      state.priceRange = action.payload; // { from: number, to: number }
    },
    resetFilters(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setAvailability,
  setOccasions,
  setFabrics,
  setColors,
  setPriceRange,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
