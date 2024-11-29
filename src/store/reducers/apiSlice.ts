import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk para buscar os produtos
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('http://localhost:3000/api/products');
  return response.json();
});

type ProductTest = {
  id: number;
  name: string;
};

type ProductsTestState = {
  items: ProductTest[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
};

const initialState: ProductsTestState = {
  items: [],
  status: 'idle',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const productsReducer = productsSlice.reducer;
