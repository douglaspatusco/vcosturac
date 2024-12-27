import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import {
  closeCart,
  removeItemFromCart,
  toggleCart,
  updateQuantity,
} from '@/store/reducers/cartSlice'

import { formattedPrice, getFirstLetter } from '@/services/utility'

import Amount from '../Amount'

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

const Cart = () => {
  const { isCartOpen, cartItems } = useSelector(
    (state: RootState) => state.cart
  )
  const [amountValue, setAmountValue] = useState(1)
  const dispatch = useDispatch()

  const removeItem = (id: string, selectedPrint?: string) => {
    dispatch(removeItemFromCart({ id, selectedPrint }));
  };

  const handleQuantityChange = (id: string, selectedPrint: string, increment: boolean) => {
    const produto = cartItems.find(
      (item) => item.id === id && item.selectedPrint === selectedPrint
    )
    if (produto) {
      const newQuantity = increment
        ? produto.quantity + 1
        : Math.max(1, produto.quantity - 1)
      dispatch(updateQuantity({ id, selectedPrint, quantity: newQuantity }))
    }
  }
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
                  <img
                    src={
                      typeof item.medias?.thumbnail === 'string'
                        ? item.medias.thumbnail
                        : undefined
                    }
                    alt={item.name}
                  />
                  <div>
                    <h4>{item.name}</h4>
                    <h4>
                      {getFirstLetter(item.selectedPrint)
                        ? `Estampa: ${getFirstLetter(item.selectedPrint)}`
                        : ''}
                    </h4>
                    <h4>{item.price !== undefined ? formattedPrice(item.price * item.quantity) : 'Preço indisponível'}</h4>
                  </div>
                  <Amount
                    quantity={item.quantity}
                    onIncrement={() => handleQuantityChange(item.id, item.selectedPrint, true)}
                    onDecrement={() => handleQuantityChange(item.id, item.selectedPrint, false)}
                    onQuantityChange={(value) => setAmountValue(value)} // Opcional
                  />
                  <DeleteItem onClick={() => removeItem(item.id, item.selectedPrint)} type="button">
                    <img
                      src="https://www.svgrepo.com/show/533007/trash.svg"
                      alt="Remover item"
                    />
                  </DeleteItem>
                </ProductItem>
              ))}
            </ProductsList>
            <div>
              <TotalPrice>
                <h4>Total de {formattedPrice(totalPrice)}</h4>
                <p>ou 2x de {formattedPrice(totalPrice / 2)} sem juros.</p>
              </TotalPrice>
              <Checkout href={'/checkout'} onClick={handleCheckoutClick}>Continuar com a compra</Checkout>
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
