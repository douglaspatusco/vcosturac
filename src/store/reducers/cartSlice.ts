import { Product } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  isCartOpen: boolean
  cartItems: (Product & { selectedPrint?: string; quantity: number })[]
}

const initialState: CartState = {
  isCartOpen: false,
  cartItems: [] as Array<
    Product & { selectedPrint?: string; quantity: number }
  >,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Product & { selectedPrint?: string }>) => {
      const produto = state.cartItems.find(
        (item) =>
          item.id === action.payload.id &&
          item.selectedPrint === action.payload.selectedPrint
      );
      if (!produto) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      } else {
        alert('O produto já está no carrinho');
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const produto = state.cartItems.find(
        (item) => item.id === action.payload.id
      )
      if (produto) {
        produto.quantity = action.payload.quantity
      }
    },
    removeItemFromCart: (state, action: PayloadAction<{ id: string; selectedPrint?: string }>) => {
      state.cartItems = state.cartItems.filter(
        (item) =>
          item.id !== action.payload.id || item.selectedPrint !== action.payload.selectedPrint
      );
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen
    },
    closeCart: (state) => {
      state.isCartOpen = false
    },
    clearCart: (state) => {
      state.cartItems = []
    },
  },
})

export const {
  addItemToCart,
  updateQuantity,
  toggleCart,
  closeCart,
  removeItemFromCart,
  clearCart,
} = cartSlice.actions
export const cartReducer = cartSlice.reducer
