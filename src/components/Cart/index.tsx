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
                  <ProductInfos>
                    <h4>{item.name}</h4>
                    <h5>
                      {getFirstLetter(item.selectedPrint)
                        ? `Estampa: ${getFirstLetter(item.selectedPrint)}`
                        : ''}
                    </h5>
                    <h4>
                      {item.price !== undefined
                        ? formattedPrice(item.price * item.quantity)
                        : 'Preço indisponível'}
                    </h4>
                  </ProductInfos>
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
                  <DeleteProduct
                    onClick={() =>
                      removeItem(dispatch, item.id, item.selectedPrint ?? '')
                    }
                  />
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
