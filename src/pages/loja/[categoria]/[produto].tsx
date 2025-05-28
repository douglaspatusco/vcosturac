import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store'
import { setSelectedPrintSrc } from '@/store/reducers/selectedPrintSrcSlice'
import { setSelectedPrint } from '@/store/reducers/selectedPrintSlice'
import { setSelectedPrintAlt } from '@/store/reducers/selectedPrintAltSlice'

import { useFetchProducts } from '@/hooks/useFetchProducts'
import { useMainImage } from '@/hooks/useMainImage'
import Breadcrumbs from '@/components/Breadcrumbs'

import { formattedPrice, getFirstLetter } from '@/services/utility'
import {
  addToCart,
  getPrintImageUrl,
  handleThumbnailClick,
  handleZoomMouseMove,
  enableZoom,
  disableZoom,
} from '@/utils/produtoUtils'

import {
  BuyButton,
  ContainerBuy,
  ContainerStore,
  Description,
  Price,
  Prints,
  PrintsList,
  ProductContainer,
  ProductDetails,
  ProductImages,
  ProductName,
  SelectedImage,
  Thumbnail,
  ThumbnailsContainer,
  ZoomContainer,
  ZoomedImage,
} from './styles'

const ProdutoPage = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { produto, estampa, imagem } = router.query

  const estampaParam = typeof estampa === 'string' ? estampa : ''
  const imagemParam = typeof imagem === 'string' ? imagem : ''

  const { products, loading } = useFetchProducts()
  const product = products.find((product) => product.slug === produto)

  const { mainImage, setMainImage } = useMainImage({
    product: product as Product,
    selectedPrintKey: estampaParam,
    selectedPrintAlt: imagemParam,
  })

  const [isZoomed, setIsZoomed] = useState(false)
  const [transformOrigin, setTransformOrigin] = useState('center center')

  const selectedPrintAlt = useSelector(
    (state: RootState) => state.selectedPrintAlt.value
  )
  const selectedPrintSrc = useSelector(
    (state: RootState) => state.selectedPrintSrc.value
  )
  const selectedPrint = useSelector(
    (state: RootState) => state.selectedPrint.value
  )

  const printImages = product?.medias?.prints[selectedPrint] || []
  const availablePrints = Object.entries(product?.medias?.prints || {}).filter(
    ([, images]) => Array.isArray(images) && images.length > 0
  )

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

  const handlePrintClick = (key: string) => {
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
            produto,
            estampa: key,
            imagem: firstImage.alt.toLowerCase(),
          },
        },
        undefined,
        { shallow: true }
      )
    }
  }

  if (loading) return <p>Carregando...</p>
  if (!product) return <p>Produto não encontrado.</p>

  return (
    <ContainerStore>
      <Head>
        <title>{`${product.name} | Vânia Costura Criativa`}</title>
      </Head>
      <Breadcrumbs />
      <ProductContainer>
        <ProductImages>
          <ZoomContainer
            onMouseMove={(e) => handleZoomMouseMove(e, setTransformOrigin)}
            onMouseEnter={() => enableZoom(setIsZoomed)}
            onMouseLeave={() => disableZoom(setIsZoomed)}
          >
            {mainImage && typeof mainImage.src === 'string' ? (
              <ZoomedImage
                src={mainImage.src}
                alt={mainImage.alt}
                title={mainImage.alt}
                $isZoomed={isZoomed}
                $transformOrigin={transformOrigin}
              />
            ) : (
              <p>Carregando imagem...</p>
            )}
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
                  dispatch(setSelectedPrintSrc(image.src))
                  dispatch(setSelectedPrintAlt(image.alt))
                  router.push(
                    {
                      pathname: router.pathname,
                      query: {
                        ...router.query,
                        produto,
                        estampa: selectedPrint,
                        imagem: image.alt.toLowerCase(),
                      },
                    },
                    undefined,
                    { shallow: true }
                  )
                }}
              />
            ))}
          </ThumbnailsContainer>
        </ProductImages>
        <ProductDetails>
          <ProductName>{product.name}</ProductName>
          <div>
            <Price>{formattedPrice(product.price as number)}</Price>
            <span>
              ou <b>{product.division}</b> de{' '}
              <b>{formattedPrice(product.installment)}</b> sem juros!
            </span>
          </div>
          <Prints>
            <p>Estampas: </p>
            <PrintsList>
              {availablePrints.map(([key]) => {
                const ImageComponent =
                  key === selectedPrint ? SelectedImage : Image
                return (
                  <ImageComponent
                    key={key}
                    onClick={() => handlePrintClick(key)}
                    title={getFirstLetter(key)}
                    alt={key}
                    src={getPrintImageUrl(key)}
                    width={100}
                    height={100}
                  />
                )
              })}
            </PrintsList>
          </Prints>
          <ContainerBuy>
            <BuyButton
              type="submit"
              title="Adicionar ao carrinho"
              onClick={() =>
                addToCart(
                  dispatch,
                  product,
                  selectedPrint,
                  selectedPrintSrc,
                  selectedPrintAlt
                )
              }
            >
              ADICIONAR AO CARRINHO
            </BuyButton>
          </ContainerBuy>
          <Description>
            <h4>Descrição:</h4>
            <p>{product.description}</p>
          </Description>
        </ProductDetails>
      </ProductContainer>
    </ContainerStore>
  )
}

export default ProdutoPage
