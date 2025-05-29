import { useState } from 'react'

import {
  handleThumbnailClick,
  handleZoomMouseMove,
  enableZoom,
  disableZoom,
} from '@/utils/produtoUtils'

import {
  ZoomContainer,
  ZoomedImage,
  ThumbnailsContainer,
  Thumbnail,
  Container,
} from './styles'

interface Props {
  mainImage: { src: string; alt: string } | null
  printImages: { src: string; alt: string }[]
  setMainImage: (image: { src: string; alt: string }) => void
  onThumbnailClick: (image: { src: string; alt: string }) => void
}

export const ProductImagesWithZoom = ({
  mainImage,
  printImages,
  setMainImage,
  onThumbnailClick,
}: Props) => {
  const [isZoomed, setIsZoomed] = useState(false)
  const [transformOrigin, setTransformOrigin] = useState('center center')

  return (
    <Container>
      <ZoomContainer
        onMouseMove={(e) => handleZoomMouseMove(e, setTransformOrigin)}
        onMouseEnter={() => enableZoom(setIsZoomed)}
        onMouseLeave={() => disableZoom(setIsZoomed)}
      >
        <ZoomedImage
          src={mainImage?.src}
          alt={mainImage?.alt}
          title={mainImage?.alt}
          $isZoomed={isZoomed}
          $transformOrigin={transformOrigin}
        />
      </ZoomContainer>
      <ThumbnailsContainer>
        {printImages.map((image) => (
          <Thumbnail
            key={image.src}
            src={image.src}
            alt={image.alt}
            title={image.alt}
            onClick={() => {
              handleThumbnailClick(image, setMainImage)
              onThumbnailClick(image)
            }}
          />
        ))}
      </ThumbnailsContainer>
    </Container>
  )
}

export default ProductImagesWithZoom
