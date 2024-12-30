import { useRouter } from 'next/router'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

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
  const { products, loading } = useSelector(
    (state: RootState) => state.products
  )

  const filteredProducts = products.filter(
    (product) => product.category === categoria
  )

  if (loading) return <p>Carregando...</p>

  if (!filteredProducts.length)
    return (
      <p>Nenhum produto encontrado para a categoria &quot;{categoria}&quot;.</p>
    )

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
                  src={
                    typeof product.medias?.thumbnail === 'string'
                      ? product.medias.thumbnail
                      : ''
                  }
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
