import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './reducers/apiSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

// Tipos para TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
