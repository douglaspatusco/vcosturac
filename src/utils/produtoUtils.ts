import { Dispatch, SetStateAction } from 'react'
import { AppDispatch } from '@/store'
import { addItemToCart, toggleCart } from '@/store/reducers/cartSlice'
import { PrintsImages, Product } from '@/types/product'

// ---------- ZOOM NA IMAGEM

// Calcula a origem da transformação para o efeito de zoom.
export const calculateMousePosition = (
  e: React.MouseEvent<HTMLDivElement>,
  setTransformOrigin: Dispatch<SetStateAction<string>>
) => {
  const rect = e.currentTarget.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width) * 100
  const y = ((e.clientY - rect.top) / rect.height) * 100
  setTransformOrigin(`${x}% ${y}%`)
}

// Ativa o zoom na imagem.
export const enableZoom = (setIsZoomed: Dispatch<SetStateAction<boolean>>) => {
  setIsZoomed(true)
}

// Desativa o zoom na imagem.
export const disableZoom = (setIsZoomed: Dispatch<SetStateAction<boolean>>) => {
  setIsZoomed(false)
}

// ---------- ESTAMPAS

// Obtém a URL de uma estampa específica.
export const getPrintImageUrl = (key: string) =>
  `https://raw.githubusercontent.com/eyelexx/vcosturac/refs/heads/main/src/public/images/estampas/${key}.jpg`

// Seleciona a imagem principal para exibição.
export const handleThumbnailClick = (
  image: PrintsImages,
  setMainImage: React.Dispatch<React.SetStateAction<PrintsImages | null>>
) => {
  setMainImage(image)
}

// Adiciona um produto ao carrinho com a estampa selecionada.
export const addToCart = (
  dispatch: AppDispatch,
  product: Product,
  selectedPrint: string
) => {
  const productWithPrint = {
    ...product,
    selectedPrint,
  }
  dispatch(addItemToCart(productWithPrint))
  dispatch(toggleCart())
}
