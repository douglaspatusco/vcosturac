import { configureStore } from '@reduxjs/toolkit'

import apiProductsReducer from './reducers/apiProductsSlice'
import thumbnailsReducer from './reducers/thumbnailsSlice'
import cartReducer from './reducers/cartSlice'
import amountReducer from './reducers/amountSlice'
import zoomReducer from './reducers/zoomSlice'
import transformOriginReducer from './reducers/transformOriginSlice'
import selectedPrintReducer from './reducers/selectedPrintSlice'
import selectedPrintSrcReducer from './reducers/selectedPrintSrcSlice'
import selectedPrintAltReducer from './reducers/selectedPrintAltSlice'
import shippingReducer from './reducers/shippingSlice'
import formOrderReducer from './reducers/formOrderSlice'
import timeReducer from './reducers/timeSlice'

export const store = configureStore({
  reducer: {
    products: apiProductsReducer,
    thumbnails: thumbnailsReducer,
    cart: cartReducer,
    amount: amountReducer,
    zoom: zoomReducer,
    transformOrigin: transformOriginReducer,
    selectedPrint: selectedPrintReducer,
    selectedPrintSrc: selectedPrintSrcReducer,
    selectedPrintAlt: selectedPrintAltReducer,
    shipping: shippingReducer,
    formOrder: formOrderReducer,
    time: timeReducer,
  },
})

store.subscribe(() => {
  const state = store.getState()
  if (typeof window !== 'undefined') {
    localStorage.setItem('cartItems', JSON.stringify(state.cart.cartItems))
    try {
      localStorage.setItem(
        process.env.CART_STORAGE_KEY || 'cartItems',
        JSON.stringify(state.cart.cartItems)
      )
    } catch (error) {
      console.error(
        'Erro ao salvar carrinho no localStorage via subscribe:',
        error
      )
    }
  }
})

// LEMBRAR DE LIMPAR O LOCAL STORAGE NA CONCLUSAÇÃO DO PEDIDO
// Isso pode ser feito no reducer de checkout ou em um efeito colateral após a finalização do pedido.

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
