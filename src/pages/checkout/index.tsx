import { useMemo } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'

import DeleteProduct from '@/components/DeleteProduct'
import FreightCalculator from '@/components/Freight'

import { formattedPrice, getFirstLetter } from '@/services/utility'
import { calculateTotalPrice, removeItem } from '@/utils/cartUtils'

import {
  CartTableContainer,
  ContainerWhite,
  TableRow,
  ProductImage,
  CellBody,
  CellProduct,
  ShippingContainer,
  Container,
  Total,
  ShippingAndTotal,
  TableBody,
  ProductLength,
} from './styles'

const Checkout = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart)
  const selectedFreight = useSelector(
    (state: RootState) => state.shipping.selectedFreight
  )

  const cartTotalPrice = useMemo(
    () => calculateTotalPrice(cartItems),
    [cartItems]
  )
  const total = useMemo(() => {
    const freightPrice = Number(selectedFreight?.price) || 0
    return (cartTotalPrice + freightPrice).toFixed(2)
  }, [cartTotalPrice, selectedFreight])

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
            <TableBody>
              {cartItems.map((product) => (
                <TableRow key={product.id}>
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
                      <ProductLength>{product.quantity}</ProductLength>
                    </Link>
                  </CellProduct>
                  <CellBody>
                    <span>{product.name} </span>
                    <span>{getFirstLetter(product.selectedPrint)}</span>
                  </CellBody>
                  <CellBody>
                    {product.price !== undefined
                      ? formattedPrice(product.price * product.quantity)
                      : 'Preço indisponível'}
                  </CellBody>
                  <CellBody>
                    <DeleteProduct
                      onClick={() =>
                        removeItem(
                          dispatch,
                          product.id,
                          product.selectedPrint ?? ''
                        )
                      }
                      isCheckout={true}
                    />
                  </CellBody>
                </TableRow>
              ))}
            </TableBody>
          </CartTableContainer>
          <ShippingAndTotal>
            <ShippingContainer>
              <FreightCalculator />
            </ShippingContainer>
            <Total>
              <div>
                <h4>Subtotal:</h4>
                <h4>{formattedPrice(calculateTotalPrice(cartItems))}</h4>
              </div>
              <div>
                <h4>Frete:</h4>
                <h4>{formattedPrice(Number(selectedFreight?.price) || 0)}</h4>
              </div>
              <div>
                <h2>Total:</h2>
                <h2>{formattedPrice(Number(total))}</h2>
              </div>
            </Total>
          </ShippingAndTotal>
        </Container>
      </ContainerWhite>
    </>
  )
}

export default Checkout
