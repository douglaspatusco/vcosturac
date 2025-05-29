import { Dispatch } from 'redux'
import { NextRouter } from 'next/router'

import { setSelectedPrintSrc } from '@/store/reducers/selectedPrintSrcSlice'
import { setSelectedPrint } from '@/store/reducers/selectedPrintSlice'
import { setSelectedPrintAlt } from '@/store/reducers/selectedPrintAltSlice'

interface Image {
  src: string
  alt: string
}

interface Product {
  medias?: {
    prints: Record<string, Image[]>
  }
}

export const handlePrintClick = (
  key: string,
  product: Product,
  router: NextRouter,
  dispatch: Dispatch,
  setMainImage: (image: Image) => void,
  produtoSlug?: string
) => {
  const firstImage = product?.medias?.prints[key]?.[0]
  if (firstImage) {
    dispatch(setSelectedPrint(key))
    dispatch(setSelectedPrintSrc(firstImage.src))
    dispatch(setSelectedPrintAlt(firstImage.alt))
    setMainImage(firstImage)

    router.push(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          produto: produtoSlug,
          estampa: key,
          imagem: firstImage.alt.toLowerCase(),
        },
      },
      undefined,
      { shallow: true }
    )
  }
}
