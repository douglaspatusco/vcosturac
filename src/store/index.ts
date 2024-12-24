import { configureStore } from '@reduxjs/toolkit'

import { productsReducer } from './reducers/apiSlice'
import { thumbnailsReducer } from './reducers/thumbnailsSlice'
import { cartReducer } from './reducers/cartSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    thumbnails: thumbnailsReducer,
    cart: cartReducer,
  },
})

// Tipos para TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
