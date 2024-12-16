import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../store'
import { useEffect } from 'react'
import { fetchProducts } from '../../store/reducers/apiSlice'
import Head from 'next/head'
import { ItemLink, ContainerProducts, ListItem, ProductsList, Thumb } from './styles'
import { formattedPrice } from '@/services/utility'

const CategoriaPage = () => {
  const { categoria } = useRouter().query
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
      <ContainerProducts>
        <h1>Categoria: {categoria}</h1>
        <ProductsList>
          {filteredProducts.map((product) => (
            <ListItem key={product.slug}>
              <ItemLink href={`/loja/${categoria}/${product.slug}`}>
                <Thumb src={product.medias?.thumbnail} alt={product.name} width={100} height={100} />
                <div>
                  <h3>{product.name}</h3>
                  <p>{formattedPrice(product.price)}</p>
                </div>
              </ItemLink>
            </ListItem>
          ))}
        </ProductsList>
      </ContainerProducts>
    </>
  )
}

export default CategoriaPage
