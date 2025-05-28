import { Dispatch, SetStateAction } from 'react'

import { AppDispatch } from '@/store'
import { addItemToCart, toggleCart } from '@/store/reducers/cartSlice'

// ---------- ZOOM NA IMAGEM

let animationFrameId: number | null = null

// Atualiza a origem do zoom de forma suave com requestAnimationFrame
const updateTransformOrigin = (
  x: number,
  y: number,
  setTransformOrigin: Dispatch<SetStateAction<string>>
) => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }

  animationFrameId = requestAnimationFrame(() => {
    setTransformOrigin(`${x}% ${y}%`)
  })
}

// Calcula a origem da transformação para o efeito de zoom.
export const handleZoomMouseMove = (
  e: React.MouseEvent<HTMLDivElement>,
  setTransformOrigin: Dispatch<SetStateAction<string>>
): void => {
  const rect = e.currentTarget.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width) * 100
  const y = ((e.clientY - rect.top) / rect.height) * 100

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

// URL base para as imagens de estampas
const BASE_URL =
  'https://raw.githubusercontent.com/eyelexx/vcosturac/refs/heads/main/src/public/images/estampas/'

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
  selectedPrintImage: string,
  selectedPrintAlt: string
) => {
  const prints = product.medias?.prints[selectedPrint] || []

  const imageIndex = prints.findIndex((img) => img.src === selectedPrintImage)

  const productWithPrint = {
    ...product,
    selectedPrint,
    selectedPrintImage,
    selectedPrintAlt,
    imageIndex,
    selectedPrintSrc: getPrintImageUrl(selectedPrint),
  }
  dispatch(addItemToCart(productWithPrint))
  dispatch(toggleCart())
}
