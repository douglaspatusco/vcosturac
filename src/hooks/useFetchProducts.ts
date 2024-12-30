import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState, AppDispatch } from '../store'
import { fetchApiProducts } from '@/store/reducers/apiSlice'

export const useFetchProducts = () => {
  const dispatch: AppDispatch = useDispatch()
  const { products, loading } = useSelector(
    (state: RootState) => state.products
  )

  useEffect(() => {
    if (!loading && products.length === 0) {
      dispatch(fetchApiProducts())
    }
  }, [dispatch, products, loading])

  return { products, loading }
}
