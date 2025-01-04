import { useEffect, useState } from 'react'
import { PrintsImages, Product } from '@/types/product'

interface UseMainImageReturn {
  mainImage: PrintsImages | null
  setMainImage: React.Dispatch<React.SetStateAction<PrintsImages | null>>
}

export const useMainImage = (product: Product): UseMainImageReturn => {
  const [mainImage, setMainImage] = useState<PrintsImages | null>(null)

  useEffect(() => {
    if (product && product.medias && product.medias.thumbnail) {
      setMainImage({
        src: product.medias.thumbnail,
        alt: product.name,
      })
    }
  }, [product])

  return { mainImage, setMainImage }
}
