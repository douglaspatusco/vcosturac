import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { closeCart, removeItemFromCart } from "@/store/reducers/cartSlice"

import { formattedPrice } from "@/services/utility"

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
  Checkout
} from "./styles"

const Cart = () => {
  const { isCartOpen, items } = useSelector((state: RootState) => state.cart)

  const dispatch = useDispatch()

  const removeItem = (id: string) => {
    dispatch(removeItemFromCart(id))
  }

  const totalPrice = items.reduce((acc, product) => acc + product.price, 0)

  return (
    <Container className={isCartOpen ? 'is-open' : ''} >
      <Overlay onClick={() => dispatch(closeCart())}/>
      <Sidebar className={isCartOpen ? 'is-open' : ''}>
        {items.length > 0 ? (
          <CartContainer>
            <ProductsList>
              {items.map((item) => (
                <ProductItem key={item.id}>
                  <img src={item.medias?.thumbnail} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <h4>{formattedPrice(item.price)}</h4>
                  </div>
                  <DeleteItem onClick={() => removeItem(item.id)} type="button" >X</DeleteItem>
                </ProductItem>
              ))}
            </ProductsList>
            <TotalPrice>
              <h4>Total de {formattedPrice(totalPrice)}</h4>
              <p>ou 2x de {formattedPrice(totalPrice / 2)} sem juros.</p>
            </TotalPrice>
            <Checkout href={'/checkout'} >Continuar com a compra</Checkout>
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
