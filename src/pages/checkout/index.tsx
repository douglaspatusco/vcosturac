import Head from 'next/head'
import { CheckoutProduct, CheckoutProductsList, Container } from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

const Checkout: React.FC = () => {
  const { products, loading } = useSelector(
    (state: RootState) => state.products
  )

  return (
    <>
      <Head>
        <title>Checkout | Vânia Costura Criativa</title>
      </Head>
      <Container>
        <h1>Finalizando a sua encomenda</h1>
        <CheckoutProductsList>
          {products.map((product) => (
            <CheckoutProduct key={product.id}>
              <h3>{product.name}</h3>
            </CheckoutProduct>
          ))}
        </CheckoutProductsList>
      </Container>
    </>
  )
}

export default Checkout
