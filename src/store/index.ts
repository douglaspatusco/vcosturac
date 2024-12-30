import { configureStore } from '@reduxjs/toolkit'

import { apiProductsReducer } from './reducers/apiSlice'
import { thumbnailsReducer } from './reducers/thumbnailsSlice'
import { cartReducer } from './reducers/cartSlice'
import amountReducer from './reducers/amountSlice'
import zoomReducer from './zoomSlice'
import transformOriginReducer from './reducers/transformOriginSlice'

export const store = configureStore({
  reducer: {
    products: apiProductsReducer,
    thumbnails: thumbnailsReducer,
    cart: cartReducer,
    amount: amountReducer,
    zoom: zoomReducer,
    transformOrigin: transformOriginReducer,
  },
})

// Tipos para TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
