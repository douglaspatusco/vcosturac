import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import Amount from '../Amount'
import { closeCart, toggleCart } from '@/store/reducers/cartSlice'

import { formattedPrice, getFirstLetter } from '@/services/utility'
import { handleQuantityChange, removeItem } from '@/utils/cartUtils'

import {
  Container,
  CartContainer,
  DeleteItem,
  EmptyCart,
  Overlay,
  ProductItem,
  ProductsList,
  Sidebar,
  TotalPrice,
  Checkout,
} from './styles'
import Image from 'next/image'

const Cart = () => {
  const { isCartOpen, cartItems } = useSelector(
    (state: RootState) => state.cart
  )
  const [amountValue, setAmountValue] = useState(1)
  const dispatch = useDispatch()

  const handleCheckoutClick = () => {
    dispatch(closeCart())
  }

  const totalPrice = cartItems.reduce(
    (acc, product) => acc + (product.price ?? 0) * product.quantity,
    0
  )

  return (
    <Container className={isCartOpen ? 'is-open' : ''}>
      <Overlay onClick={() => dispatch(toggleCart())} />
      <Sidebar className={isCartOpen ? 'is-open' : ''}>
        {cartItems.length > 0 ? (
          <CartContainer>
            <ProductsList>
              {cartItems.map((item) => (
                <ProductItem key={`${item.id}-${item.selectedPrint}`}>
                  <Image
                    src={
                      typeof item.medias?.thumbnail === 'string'
                        ? item.medias.thumbnail
                        : '/path/to/default/image.jpg'
                    }
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                  <div>
                    <h4>{item.name}</h4>
                    <h4>
                      {getFirstLetter(item.selectedPrint)
                        ? `Estampa: ${getFirstLetter(item.selectedPrint)}`
                        : ''}
                    </h4>
                    <h4>
                      {item.price !== undefined
                        ? formattedPrice(item.price * item.quantity)
                        : 'Preço indisponível'}
                    </h4>
                  </div>
                  <Amount
                    quantity={item.quantity}
                    onIncrement={() =>
                      handleQuantityChange(
                        dispatch,
                        cartItems,
                        item.id,
                        item.selectedPrint,
                        true
                      )
                    }
                    onDecrement={() =>
                      handleQuantityChange(
                        dispatch,
                        cartItems,
                        item.id,
                        item.selectedPrint,
                        false
                      )
                    }
                    onQuantityChange={(value) => setAmountValue(value)}
                  />
                  <DeleteItem
                    onClick={() =>
                      removeItem(dispatch, item.id, item.selectedPrint)
                    }
                    type="button"
                  >
                    <svg
                      width="50px"
                      height="50px"
                      viewBox="0 0 50 50"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20 18h2v16h-2z" />
                      <path d="M24 18h2v16h-2z" />
                      <path d="M28 18h2v16h-2z" />
                      <path d="M12 12h26v2H12z" />
                      <path d="M30 12h-2v-1c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v1h-2v-1c0-1.7 1.3-3 3-3h4c1.7 0 3 1.3 3 3v1z" />
                      <path d="M31 40H19c-1.6 0-3-1.3-3.2-2.9l-1.8-24 2-.2 1.8 24c0 .6.6 1.1 1.2 1.1h12c.6 0 1.1-.5 1.2-1.1l1.8-24 2 .2-1.8 24C34 38.7 32.6 40 31 40z" />
                    </svg>
                  </DeleteItem>
                </ProductItem>
              ))}
            </ProductsList>
            <div>
              <TotalPrice>
                <h4>Total de {formattedPrice(totalPrice)}</h4>
                <p>ou 2x de {formattedPrice(totalPrice / 2)} sem juros.</p>
              </TotalPrice>
              <Checkout href={'/checkout'} onClick={handleCheckoutClick}>
                Continuar com a compra
              </Checkout>
            </div>
          </CartContainer>
        ) : (
          <EmptyCart>
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra.
          </EmptyCart>
        )}
      </Sidebar>
    </Container>
  )
}

export default Cart
