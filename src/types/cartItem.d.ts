import { Product } from '@/types/product'

export interface CartItem extends Product {
  selectedPrint: string
  quantity: number
}

export interface CartState {
  isCartOpen: boolean
  cartItems: CartItem[]
}
