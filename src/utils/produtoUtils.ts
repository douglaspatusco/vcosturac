import { Dispatch, SetStateAction } from 'react'
import { AppDispatch } from '@/store'
import { addItemToCart, toggleCart } from '@/store/reducers/cartSlice'

// URL base para as imagens de estampas
const BASE_URL =
  'https://raw.githubusercontent.com/eyelexx/vcosturac/refs/heads/main/src/public/images/estampas/'

// ---------- ZOOM NA IMAGEM

// Calcula a origem da transformação para o efeito de zoom.
export const calculateMousePosition = (
  e: React.MouseEvent<HTMLDivElement>,
  setTransformOrigin: Dispatch<SetStateAction<string>>
): void => {
  const rect = e.currentTarget.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width) * 100
  const y = ((e.clientY - rect.top) / rect.height) * 100
  setTransformOrigin(`${x}% ${y}%`)
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
