import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Definir um tipo mais específico para os itens do carrinho,
// incluindo todos os campos usados para identificar unicamente um item e sua quantidade.
type CartItemType = Product & {
  selectedPrint?: string
  selectedPrintAlt?: string // Adicionado pois é usado para identificar itens
  quantity: number
}

type CartState = {
  isCartOpen: boolean
  cartItems: CartItemType[]
  total?: number
}

const chave = process.env.CART_STORAGE_KEY || 'cartItems'

const loadCartFromLocalStorage = (): CartItemType[] => {
  // Garante que o localStorage só seja acessado no lado do cliente
  if (typeof window === 'undefined') {
    return []
  }
  try {
    const serializedCart = localStorage.getItem(chave) // Usar a chave constante
    if (serializedCart === null) {
      return [] // Nenhum carrinho salvo, retorna array vazio
    }
    return JSON.parse(serializedCart)
  } catch (error) {
    console.error('Erro ao carregar carrinho do localStorage:', error)
    return [] // Em caso de erro, retorna array vazio
  }
}

const initialState: CartState = {
  isCartOpen: false,
  cartItems: loadCartFromLocalStorage(),
  total: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems(state, action) {
      state.cartItems = action.payload
    },
    addItemToCart: (
      state,
      // O payload deve conter todos os identificadores necessários
      action: PayloadAction<
        Product & { selectedPrint?: string; selectedPrintAlt?: string }
      >
    ) => {
      const existingItem = state.cartItems.find(
        (item) =>
          item.id === action.payload.id &&
          item.selectedPrint === action.payload.selectedPrint &&
          item.selectedPrintAlt === action.payload.selectedPrintAlt
      )
      if (!existingItem) {
        state.cartItems.push({ ...action.payload, quantity: 1 })
      } else {
        alert('O produto já está no carrinho')
      }
    },
    updateQuantity: (state, action) => {
      const { id, selectedPrint, quantity } = action.payload
      const item = state.cartItems.find(
        (item) =>
          item.id === id &&
          item.selectedPrint === selectedPrint &&
          item.selectedPrintAlt === action.payload.selectedPrintAlt // Certifique-se que payload tem selectedPrintAlt
      )
      if (item) {
        item.quantity = quantity
      }
    },
    removeItemFromCart: (
      state,
      action: PayloadAction<{
        selectedPrintAlt: string
        id: number | string // id pode ser number ou string dependendo da sua definição de Product
        selectedPrint?: string
      }>
    ) => {
      state.cartItems = state.cartItems.filter(
        (item) =>
          item.id !== action.payload.id ||
          item.selectedPrint !== action.payload.selectedPrint ||
          item.selectedPrintAlt !== action.payload.selectedPrintAlt
      )
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen
    },
    closeCart: (state) => {
      state.isCartOpen = false
    },
    clearCart: (state) => {
      state.cartItems = []
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload
    },
  },
})

export const {
  setCartItems,
  addItemToCart,
  updateQuantity,
  toggleCart,
  closeCart,
  removeItemFromCart,
  clearCart,
  setTotal,
} = cartSlice.actions
export default cartSlice.reducer
