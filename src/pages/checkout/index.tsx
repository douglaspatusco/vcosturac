import { useEffect, useState } from 'react'
import Head from 'next/head'

import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import CheckoutTitle from '@/components/CheckoutTitles'
import CheckoutCartItem from '@/components/CheckoutCartItems'
import FormOrder from '@/components/FormOrder'
import OrderSummary from '@/components/OrderSummary'

import { CartProductsList, ContainerWhite, Container, Resume } from './styles'

const Checkout = () => {
  const [isClientHydrated, setIsClientHydrated] = useState(false)
  const { cartItems } = useSelector((state: RootState) => state.cart)

  // Este efeito roda apenas no cliente, após a montagem inicial. Renderiza 0 para corresponder ao "Server: 0".
  // Isso garante que o componente não tente acessar o DOM antes de ser montado.
  useEffect(() => {
    setIsClientHydrated(true)
  }, [])

  if (!isClientHydrated) {
    // Trocar por um loader
    return <span>0</span>
  }
  return (
    <>
      <Head>
        <title>Checkout | Vânia Costura Criativa</title>
      </Head>
      <ContainerWhite>
        <h1>Finalizando a sua encomenda</h1>
        <Container>
          <FormOrder />
          <Resume>
            <CartProductsList>
              <CheckoutTitle icon={faCartShopping}>
                Resumo da Compra
              </CheckoutTitle>
              {cartItems.map((product, index) => (
                <CheckoutCartItem key={index} product={product} />
              ))}
              <OrderSummary />
            </CartProductsList>
          </Resume>
        </Container>
      </ContainerWhite>
    </>
  )
}

export default Checkout
