import Image from 'next/image'
import Amount from '../Amount'

import { RootState } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { closeCart, toggleCart } from '@/store/reducers/cartSlice'
import { setAmountValue } from '@/store/reducers/amountSlice'

import { formattedPrice, getFirstLetter } from '@/services/utility'
import {
  handleQuantityChange,
  removeItem,
  calculateTotalPrice,
} from '@/utils/cartUtils'

import { colors } from '@/styles/GlobalStyles'
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
  ProductInfos,
  SubtotalAndCheckout,
} from './styles'

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
              {cartItems.map((product) => (
                <ProductItem key={`${product.id}-${product.selectedPrint}`}>
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
                  <DeleteItem
                    onClick={() =>
                      removeItem(
                        dispatch,
                        product.id,
                        product.selectedPrint ?? ''
                      )
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
