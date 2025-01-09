import { Product } from '@/types/product'

interface CartItem extends Product {
  selectedPrint?: string
  quantity: number
}

interface CartState {
  isCartOpen: boolean
  cartItems: CartItem[]
}
