import { Product } from '@/types'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

type ProductsApiState = {
  products: Product[]
  loading: boolean
  error: string | null
}

const initialState: ProductsApiState = {
  products: [],
  loading: false,
  error: null,
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('/api/products')

    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }

    return (await response.json()) as Product[]
  }
)

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false
          state.products = action.payload
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch products'
      })
  },
})

export const productsReducer = productsSlice.reducer
