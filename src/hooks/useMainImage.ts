import { useEffect, useState } from 'react'

interface UseMainImageProps {
  product: Product
  selectedPrintKey: string
  selectedPrintAlt?: string
}

interface UseMainImageReturn {
  mainImage: PrintsImages | null
  setMainImage: React.Dispatch<React.SetStateAction<PrintsImages | null>>
}

export const useMainImage = ({
  product,
  selectedPrintKey,
  selectedPrintAlt,
}: UseMainImageProps): UseMainImageReturn => {
  const [mainImage, setMainImage] = useState<PrintsImages | null>(null)

  useEffect(() => {
    if (!product) return

    const prints = product.medias?.prints || {}
    const images = prints[selectedPrintKey] || []

    const foundImage =
      selectedPrintAlt &&
      images.find(
        (img) => img.alt.toLowerCase() === selectedPrintAlt.toLowerCase()
      )

    if (foundImage) {
      setMainImage(foundImage)
    } else if (images.length > 0) {
      setMainImage(images[0])
    } else if (product.medias?.thumbnail) {
      setMainImage({
        src: product.medias.thumbnail,
        alt: product.name,
      })
    }
  }, [product, selectedPrintKey, selectedPrintAlt])

  return { mainImage, setMainImage }
}
