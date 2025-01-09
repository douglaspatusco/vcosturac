import { Dispatch, SetStateAction } from 'react'

import { AppDispatch } from '@/store'
import { addItemToCart, toggleCart } from '@/store/reducers/cartSlice'

// ---------- IMPLEMENTAÇÃO DE THROTTLE
function throttle(
  func: (
    x: number,
    y: number,
    setTransformOrigin: Dispatch<SetStateAction<string>>
  ) => void,
  limit: number
) {
  let waiting = false

  return (...args: [number, number, Dispatch<SetStateAction<string>>]) => {
    if (!waiting) {
      func(...args)
      waiting = true
      setTimeout(() => {
        waiting = false
      }, limit)
    }
  }
}

// URL base para as imagens de estampas
const BASE_URL =
  'https://raw.githubusercontent.com/eyelexx/vcosturac/refs/heads/main/src/public/images/estampas/'

// Função throttled para atualizar a origem do zoom
const updateTransformOrigin = throttle(
  (
    x: number,
    y: number,
    setTransformOrigin: Dispatch<SetStateAction<string>>
  ) => {
    setTransformOrigin(`${x}% ${y}%`)
  },
  50 // Tempo mínimo entre execuções (em milissegundos)
)

// ---------- ZOOM NA IMAGEM

// Calcula a origem da transformação para o efeito de zoom.
export const calculateMousePosition = (
  e: React.MouseEvent<HTMLDivElement>,
  setTransformOrigin: Dispatch<SetStateAction<string>>
): void => {
  const rect = e.currentTarget.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width) * 100
  const y = ((e.clientY - rect.top) / rect.height) * 100

  // Chama a função throttled para atualizar a origem do zoom
  updateTransformOrigin(x, y, setTransformOrigin)
}

// Ativa o zoom na imagem.
export const enableZoom = (
  setIsZoomed: Dispatch<SetStateAction<boolean>>
): void => {
  setIsZoomed(true)
}

// Desativa o zoom na imagem.
export const disableZoom = (
  setIsZoomed: Dispatch<SetStateAction<boolean>>
): void => {
  setIsZoomed(false)
}

// ---------- ESTAMPAS

// Obtém a URL de uma estampa específica.
export const getPrintImageUrl = (key: string): string => `${BASE_URL}${key}.jpg`

// Seleciona a imagem principal para exibição.
export const handleThumbnailClick = (
  image: PrintsImages,
  setMainImage: React.Dispatch<React.SetStateAction<PrintsImages | null>>
): void => {
  setMainImage(image)
}

// Adiciona um produto ao carrinho com a estampa selecionada.
export const addToCart = (
  dispatch: AppDispatch,
  product: Product,
  selectedPrint: string,
  selectedPrintImage: string
) => {
  const productWithPrint = {
    ...product,
    selectedPrint,
    selectedPrintImage,
  }
  dispatch(addItemToCart(productWithPrint))
  dispatch(toggleCart())
}
