import { Product } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Product[]
  isCartOpen: boolean
}

const initialState: CartState = {
  items: [],
  isCartOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Product>) => {
      const produto = state.items.find((item) => item.id === action.payload.id)
      if (!produto) {
        state.items.push(action.payload)
      } else {
        alert('O produto já está no carrinho')
      }
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { addItemToCart, toggleCart, closeCart, removeItemFromCart, clearCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer
