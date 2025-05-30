import Image from 'next/image'
import Amount from '../Amount'
import DeleteProduct from '../DeleteProduct'

import { RootState } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { closeCart, toggleCart } from '@/store/reducers/cartSlice'
import { setAmountValue } from '@/store/reducers/amountSlice'

import { formattedPrice, getFirstLetter } from '@/services/utility'
import {
  handleQuantityChange,
  removeItem,
  calculateTotalPrice,
  calculateTotalQuantity,
} from '@/utils/cartUtils'

import {
  Container,
  CartContainer,
  EmptyCart,
  Overlay,
  ProductItem,
  ProductsList,
  Sidebar,
  TotalPrice,
  Checkout,
  ProductInfos,
  SubtotalAndCheckout,
} from './styles'
import { useEffect, useState } from 'react'

const Cart = () => {
  const [isReady, setIsReady] = useState(false)
  const { isCartOpen, cartItems } = useSelector(
    (state: RootState) => state.cart
  )
  const dispatch = useDispatch()

  const handleCheckoutClick = () => {
    dispatch(closeCart())
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        console.log('Carrinho salvo no localStorage:', cartItems)
      } catch (error) {
        console.error('Erro ao salvar carrinho no localStorage:', error)
      }
    }

    setIsReady(true)
    console.log('Carrinho atualizado:', cartItems)
    console.log(`Qtd de itens no carrinho:`, calculateTotalQuantity(cartItems))
  }, [cartItems])

  if (!isReady) {
    // Ou pode colocar um loader, ou simplesmente não renderiza o carrinho ainda
    return null
  }

  return (
    <Container className={isCartOpen ? 'is-open' : ''}>
      <Overlay onClick={() => dispatch(toggleCart())} />
      <Sidebar className={isCartOpen ? 'is-open' : ''}>
        {cartItems.length > 0 ? (
          <CartContainer>
            <ProductsList>
              {cartItems.map((product) => (
                <ProductItem
                  key={`${product.id}-${product.selectedPrint}-${product.selectedPrintAlt}`}
                >
                  <Image
                    src={
                      product.selectedPrintImage
                        ? product.selectedPrintImage
                        : typeof product.medias?.thumbnail === 'string'
                          ? product.medias.thumbnail
                          : '/path/to/default/image.jpg'
                    }
                    alt={product.name}
                    width={100}
                    height={100}
                  />
                  <ProductInfos>
                    <h4>{product.name}</h4>
                    <h5>
                      {getFirstLetter(product.selectedPrint)
                        ? `Estampa: ${getFirstLetter(product.selectedPrint)}`
                        : ''}
                    </h5>
                    <h5>
                      {getFirstLetter(product.selectedPrintAlt)
                        ? `Cor: ${getFirstLetter(product.selectedPrintAlt)}`
                        : ''}
                    </h5>
                    <h4>
                      {product.price !== undefined
                        ? formattedPrice(product.price * product.quantity)
                        : 'Preço indisponível'}
                    </h4>
                  </ProductInfos>
                  <Amount
                    isCheckout={false}
                    quantity={product.quantity}
                    onIncrement={() =>
                      handleQuantityChange(
                        dispatch,
                        cartItems,
                        product.id,
                        product.selectedPrint ?? '',
                        product.selectedPrintAlt ?? '',
                        true
                      )
                    }
                    onDecrement={() =>
                      handleQuantityChange(
                        dispatch,
                        cartItems,
                        product.id,
                        product.selectedPrint ?? '',
                        product.selectedPrintAlt ?? '',
                        false
                      )
                    }
                    onQuantityChange={(value) =>
                      dispatch(setAmountValue(value))
                    }
                  />
                  <DeleteProduct
                    onClick={() =>
                      removeItem(
                        dispatch,
                        product.id,
                        product.selectedPrint ?? '',
                        product.selectedPrintAlt ?? ''
                      )
                    }
                    $isCheckout={false}
                  />
                </ProductItem>
              ))}
            </ProductsList>
            <SubtotalAndCheckout>
              <TotalPrice>
                <h2>Total:</h2>
                <div>
                  <h2>{formattedPrice(calculateTotalPrice(cartItems))}</h2>
                  <p>
                    ou 2x de{' '}
                    {formattedPrice(calculateTotalPrice(cartItems) / 2)} sem
                    juros.
                  </p>
                </div>
              </TotalPrice>
              <Checkout href={'/checkout'} onClick={handleCheckoutClick}>
                CONTINUAR COM A COMPRA
              </Checkout>
            </SubtotalAndCheckout>
          </CartContainer>
        ) : (
          <EmptyCart>
            O carrinho está vazio.
            <br />
            <br />
            Adicione pelo menos um produto
            <br />
            para continuar com a compra.
          </EmptyCart>
        )}
      </Sidebar>
    </Container>
  )
}

export default Cart
