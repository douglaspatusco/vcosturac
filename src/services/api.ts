import { Product } from '@/types/product'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'localhost:3000/api/products',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => {
        return 'products'
      },
    }),
  }),
})

export const { useGetProductsQuery } = api

export default api
