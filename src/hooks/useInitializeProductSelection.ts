import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedPrintSrc } from '@/store/reducers/selectedPrintSrcSlice'
import { setSelectedPrint } from '@/store/reducers/selectedPrintSlice'
import { setSelectedPrintAlt } from '@/store/reducers/selectedPrintAltSlice'

export const useInitializeProductSelection = (
  product: Product,
  estampaParam: string,
  imagemParam: string,
  setMainImage: (image: { src: string; alt: string }) => void
) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (product) {
      const prints = product.medias?.prints || {}

      const initialPrint =
        estampaParam && prints[estampaParam]?.length
          ? estampaParam
          : Object.keys(prints).find((key) => prints[key]?.length)

      if (initialPrint) {
        dispatch(setSelectedPrint(initialPrint))
        dispatch(setSelectedPrintAlt(imagemParam))
      }

      const initialImage =
        prints[initialPrint]?.find(
          (img) => img.alt.toLowerCase() === imagemParam?.toLowerCase()
        ) || prints[initialPrint]?.[0]

      if (initialImage) {
        setMainImage(initialImage)
        dispatch(setSelectedPrint(initialPrint || ''))
        dispatch(setSelectedPrintSrc(initialImage.src))
        dispatch(setSelectedPrintAlt(initialImage.alt))
      } else if (product.medias?.thumbnail) {
        setMainImage({ src: product.medias.thumbnail, alt: product.name })
      }
    }
  }, [product, estampaParam, imagemParam, dispatch, setMainImage])
}
