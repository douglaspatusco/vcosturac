import { CartItem } from '../components/Cart/cartItem'  ; // Ajuste para o tipo correto do item do carrinho
import { AppDispatch } from '@/store'; // Tipo do dispatch
import { updateQuantity, removeItemFromCart } from '@/store/reducers/cartSlice';

/**
 * Atualiza a quantidade de um item no carrinho.
 */
export const handleQuantityChange = (
  dispatch: AppDispatch,
  cartItems: CartItem[],
  id: string,
  selectedPrint: string,
  increment: boolean
) => {
  const produto = cartItems.find(
    (item) => item.id === id && item.selectedPrint === selectedPrint
  );
  if (produto) {
    const newQuantity = increment
      ? produto.quantity + 1
      : Math.max(1, produto.quantity - 1);
    dispatch(updateQuantity({ id, selectedPrint, quantity: newQuantity }));
  }
};

export const removeItem = (
  dispatch: AppDispatch,
  id: string,
  selectedPrint: string
) => {
  dispatch(removeItemFromCart({ id, selectedPrint }));
};
