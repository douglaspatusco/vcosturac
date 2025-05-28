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
  },
})

store.subscribe(() => {
  const state = store.getState()
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('cartItems', JSON.stringify(state.cart.cartItems))
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
