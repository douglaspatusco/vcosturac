import Head from 'next/head'
import Link from 'next/link'

import { RootState } from '@/store'
import { setAmountValue } from '@/store/reducers/amountSlice'
import { useDispatch, useSelector } from 'react-redux'

import Amount from '@/components/Amount'
import FreightCalculator from '@/components/Freight'

import { formattedPrice, getFirstLetter } from '@/services/utility'
import { handleQuantityChange } from '@/utils/cartUtils'

import {
  CartTableContainer,
  ContainerWhite,
  Row,
  Header,
  ProductImage,
  CellBody,
  CellProduct,
  ShippingContainer,
  Container,
} from './styles'

const Checkout = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  return (
    <>
      <Head>
        <title>Checkout | Vânia Costura Criativa</title>
      </Head>
      <ContainerWhite>
        <h1>Finalizando a sua encomenda</h1>
        <Container>
          <CartTableContainer>
            <Header>
              <div>Produto</div>
              <div>Quantidade</div>
              <div>SubTotal</div>
            </Header>
            {cartItems.map((product) => (
              <Row key={product.id}>
                <CellProduct>
                  <Link href={`/loja/${product.category}/${product.slug}`}>
                    <ProductImage
                      src={
                        product.selectedPrintImage || '/default-thumbnail.jpg'
                      }
                      alt={product.name}
                      width={100}
                      height={100}
                    />
                  </Link>
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
                    onQuantityChange={(value) =>
                      dispatch(setAmountValue(value))
                    }
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
          <ShippingContainer>
            <FreightCalculator />
          </ShippingContainer>
        </Container>
      </ContainerWhite>
    </>
  )
}

export default Checkout
