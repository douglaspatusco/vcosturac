import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../store'
import { fetchProducts } from '../../store/reducers/apiSlice'

import { formattedPrice } from '@/services/utility'

import {
  ItemLink,
  ContainerProducts,
  ListItem,
  ProductsList,
  Thumb,
} from './styles'

const CategoriaPage = () => {
  const { categoria } = useRouter().query
  const dispatch: AppDispatch = useDispatch()

  const { products, loading } = useSelector(
    (state: RootState) => state.products
  )

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts())
    }
  }, [dispatch, products])

  const filteredProducts = products.filter(
    (product) => product.category === categoria
  )

  if (loading) return <p>Carregando...</p>

  if (!filteredProducts.length)
    return <p>Nenhum produto encontrado para a categoria "{categoria}".</p>

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
                <Thumb
                  src={typeof product.medias?.thumbnail === 'string' ? product.medias.thumbnail : ''}
                  alt={product.name}
                  width={100}
                  height={100}
                />
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
