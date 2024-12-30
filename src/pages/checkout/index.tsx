import Head from 'next/head'
import { useState } from 'react'

import { RootState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'
import Amount from '@/components/Amount'

import { formattedPrice, getFirstLetter } from '@/services/utility'
import { handleQuantityChange } from '@/utils/cartUtils'

import {
  CartTableContainer,
  Container,
  Row,
  Header,
  ProductImage,
  CellBody,
  CellProduct,
} from './styles'

const Checkout = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart)

  const [amountValue, setAmountValue] = useState(1)
  const dispatch = useDispatch()

  return (
    <>
      <Head>
        <title>Checkout | Vânia Costura Criativa</title>
      </Head>
      <Container>
        <h1>Finalizando a sua encomenda</h1>
        <CartTableContainer>
          <Header>
            <div>Produto</div>
            <div>Quantidade</div>
            <div>SubTotal</div>
          </Header>
          {cartItems.map((product) => (
            <Row key={product.id}>
              <CellProduct>
                <ProductImage
                  src={product.selectedPrintImage || '/default-thumbnail.jpg'}
                  alt={product.name}
                  width={100}
                  height={100}
                />
                <h4>{product.name}</h4>
                <h5>{getFirstLetter(product.selectedPrint)}</h5>
              </CellProduct>
              <CellBody>
                <Amount
                  isCheckout={true}
                  quantity={product.quantity}
                  onIncrement={() =>
                    handleQuantityChange(
                      dispatch,
                      cartItems,
                      product.id,
                      product.selectedPrint ?? '',
                      true
                    )
                  }
                  onDecrement={() =>
                    handleQuantityChange(
                      dispatch,
                      cartItems,
                      product.id,
                      product.selectedPrint ?? '',
                      false
                    )
                  }
                  onQuantityChange={(value) => setAmountValue(value)}
                />
              </CellBody>
              <CellBody>
                {product.price !== undefined
                  ? formattedPrice(product.price * product.quantity)
                  : 'Preço indisponível'}
              </CellBody>
            </Row>
          ))}
        </CartTableContainer>
      </Container>
    </>
  )
}

export default Checkout
