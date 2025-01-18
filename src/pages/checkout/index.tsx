import { useMemo } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'

import DeleteProduct from '@/components/DeleteProduct'

import { formattedPrice, getFirstLetter } from '@/services/utility'
import { calculateTotalPrice, removeItem } from '@/utils/cartUtils'

import {
  CartProductsList,
  ContainerWhite,
  CartProductsItem,
  ProductImage,
  ImageContainer,
  Container,
  Total,
  ProductLength,
  ShippingData,
  ProductDescription,
  ProductPrice,
  Resume,
  ImageAndDescription,
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
          <ShippingData>
            <>
              <label htmlFor="">Nome</label>
              <input type="text" placeholder="Nome" />
            </>
            <>
              <label htmlFor="">Sobrenome</label>
              <input type="text" placeholder="Sobrenome" />
            </>
          </ShippingData>
          <Resume>
            <CartProductsList>
              {cartItems.map((product) => (
                <CartProductsItem key={product.id}>
                  <ImageAndDescription>
                    <ImageContainer>
                      <Link href={`/loja/${product.category}/${product.slug}`}>
                        <ProductImage
                          src={
                            product.selectedPrintImage ||
                            '/default-thumbnail.jpg'
                          }
                          alt={product.name}
                          width={100}
                          height={100}
                        />
                        <ProductLength>{product.quantity}</ProductLength>
                      </Link>
                    </ImageContainer>
                    <ProductDescription>
                      <h3>{product.name} </h3>
                      <h4>{getFirstLetter(product.selectedPrint)}</h4>
                    </ProductDescription>
                  </ImageAndDescription>
                  <ProductPrice>
                    <span>
                      {product.price !== undefined
                        ? formattedPrice(product.price * product.quantity)
                        : 'Preço indisponível'}
                    </span>
                  </ProductPrice>
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
                </CartProductsItem>
              ))}
            </CartProductsList>
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
          </Resume>
        </Container>
      </ContainerWhite>
    </>
  )
}

export default Checkout
