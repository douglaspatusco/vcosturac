import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { fetchProducts } from '@/store/reducers/apiSlice'
import { RootState, AppDispatch } from '../../store/index'
import Head from 'next/head'

const ItemPage = () => {
  const router = useRouter()
  const { category, id } = router.query

  const dispatch = useDispatch<AppDispatch>()
  const { items, loading, error } = useSelector((state: RootState) => state.products)

  useEffect(() => {
    if (!items.length) {
      dispatch(fetchProducts())
    }
  }, [dispatch, items]);

  const product = items.find((item) => item.id === id && item.category === category)
  console.log(product)

  if (loading) return <p>Carregando...</p>
  if (error) return <p>Erro: {error}</p>

  if (!product) return (
  <>
    <Head>
      <title>Produto não encontrado | Vânia Costura Criativa</title>
    </Head>
    <p>Produto não encontrado.</p>
  </>

  )

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Categoria: {category}</p>
      <p>ID: {id}</p>
    </div>
  )
}

export default ItemPage
