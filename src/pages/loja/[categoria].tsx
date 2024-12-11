import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../store'
import { useEffect } from 'react'
import { fetchProducts } from '../../store/reducers/apiSlice'
import Head from 'next/head'

const CategoriaPage = () => {
  const router = useRouter()
  const { categoria } = router.query
  const dispatch: AppDispatch = useDispatch()

  const { products, loading } = useSelector((state: RootState) => state.products)

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts())
    }
  }, [dispatch, products])

  const filteredProducts = products.filter((product) => product.category === categoria)

  if (loading) return <p>Carregando...</p>

  if (!filteredProducts.length) return <p>Nenhum produto encontrado para a categoria "{categoria}".</p>

  return (
    <>
    <Head>
      <title>Categorias | Vânia Costura Criativa</title>
    </Head>
      <div>
        <h1>Categoria: {categoria}</h1>
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id} onClick={() => router.push(`/loja/${categoria}/${product.id}`)}>
              {product.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default CategoriaPage
