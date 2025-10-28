// src/slices/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import {productsData} from '../../data/products';



const productsSlice = createSlice({
  name: 'products',
  initialState: productsData,
  reducers: {
    // Add product related reducers if needed
  },
});

export default productsSlice.reducer;
