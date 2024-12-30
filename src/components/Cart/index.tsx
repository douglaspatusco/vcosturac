import Image from 'next/image'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { closeCart, toggleCart } from '@/store/reducers/cartSlice'
import { setAmountValue } from '@/store/reducers/amountSlice'

import Amount from '../Amount'

import { formattedPrice, getFirstLetter } from '@/services/utility'
import {
  handleQuantityChange,
  removeItem,
  calculateTotalPrice,
} from '@/utils/cartUtils'

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
import { colors } from '@/styles/GlobalStyles'

const Cart = () => {
  const { isCartOpen, cartItems } = useSelector(
    (state: RootState) => state.cart
  )
  const dispatch = useDispatch()

  const handleCheckoutClick = () => {
    dispatch(closeCart())
  }

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
                      item.selectedPrintImage
                        ? item.selectedPrintImage
                        : typeof item.medias?.thumbnail === 'string'
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
                    isCheckout={false}
                    quantity={item.quantity}
                    onIncrement={() =>
                      handleQuantityChange(
                        dispatch,
                        cartItems,
                        item.id,
                        item.selectedPrint ?? '',
                        true
                      )
                    }
                    onDecrement={() =>
                      handleQuantityChange(
                        dispatch,
                        cartItems,
                        item.id,
                        item.selectedPrint ?? '',
                        false
                      )
                    }
                    onQuantityChange={(value) =>
                      dispatch(setAmountValue(value))
                    }
                  />
                  <DeleteItem
                    onClick={() =>
                      removeItem(dispatch, item.id, item.selectedPrint ?? '')
                    }
                    type="button"
                  >
                    <svg
                      fill={colors.creme}
                      width={100}
                      height={100}
                      viewBox="0 0 36 36"
                      version="1.1"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <title>trash-line</title>
                      <path d="M27.14,34H8.86A2.93,2.93,0,0,1,6,31V11.23H8V31a.93.93,0,0,0,.86,1H27.14A.93.93,0,0,0,28,31V11.23h2V31A2.93,2.93,0,0,1,27.14,34Z"></path>
                      <path d="M30.78,9H5A1,1,0,0,1,5,7H30.78a1,1,0,0,1,0,2Z"></path>
                      <rect x="21" y="13" width="2" height="15"></rect>
                      <rect x="13" y="13" width="2" height="15"></rect>
                      <path d="M23,5.86H21.1V4H14.9V5.86H13V4a2,2,0,0,1,1.9-2h6.2A2,2,0,0,1,23,4Z"></path>
                      <rect
                        x="0"
                        y="0"
                        width="36"
                        height="36"
                        fillOpacity="0"
                      />
                    </svg>
                  </DeleteItem>
                </ProductItem>
              ))}
            </ProductsList>
            <div>
              <TotalPrice>
                <h4>
                  Total de {formattedPrice(calculateTotalPrice(cartItems))}
                </h4>
                <p>
                  ou 2x de {formattedPrice(calculateTotalPrice(cartItems) / 2)}{' '}
                  sem juros.
                </p>
              </TotalPrice>
              <Checkout href={'/checkout'} onClick={handleCheckoutClick}>
                Continuar com a compra
              </Checkout>
            </div>
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
