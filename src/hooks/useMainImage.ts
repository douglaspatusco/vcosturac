import { useEffect, useState } from 'react'
import { PrintsImages, Product } from '@/types/product'

export const useMainImage = (product: Product) => {
  const [mainImage, setMainImage] = useState<PrintsImages | null>(null)

  useEffect(() => {
    if (product?.medias?.thumbnail) {
      setMainImage({ src: product.medias.thumbnail, alt: product.name })
    }
  }, [product])

  return { mainImage, setMainImage }
}
