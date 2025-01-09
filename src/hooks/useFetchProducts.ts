import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState, AppDispatch } from '../store'
import { fetchApiProducts } from '@/store/reducers/apiSlice'

interface UseFetchProductsReturn {
  products: Product[]
  loading: boolean
}

export const useFetchProducts = (): UseFetchProductsReturn => {
  const dispatch: AppDispatch = useDispatch()
  const { products, loading } = useSelector(
    (state: RootState) => state.products
  )

  useEffect(() => {
    if (!loading && !products.length) {
      dispatch(fetchApiProducts())
    }
  }, [dispatch, products, loading])

  return { products, loading }
}
