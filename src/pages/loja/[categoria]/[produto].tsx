import Head from 'next/head'
import Image from 'next/image'

import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store'
import { setIsZoomed } from '@/store/zoomSlice'
import { setSelectedPrintImage } from '@/store/reducers/selectedPrintImageSlice'
import { setSelectedPrint } from '@/store/reducers/selectedPrintSlice'
import { setTransformOrigin } from '@/store/reducers/transformOriginSlice'

import { useFetchProducts } from '@/hooks/useFetchProducts'
import { useMainImage } from '@/hooks/useMainImage'

import { Product } from '@/types/product'
import { formattedPrice, getFirstLetter } from '@/services/utility'
import {
  addToCart,
  calculateMousePosition,
  getPrintImageUrl,
  handleThumbnailClick,
} from '@/utils/produtoUtils'

import Breadcrumbs from '@/components/Breadcrumbs/Breadcrubs'
import FreightCalculator from '@/components/Freight'

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
  const { produto } = router.query

  const { products, loading } = useFetchProducts()
  const product = products.find((product) => product.slug === produto)

  const { mainImage, setMainImage } = useMainImage(product as Product)
  const selectedPrintImage = useSelector(
    (state: RootState) => state.selectedPrintImage.value
  )

  const isZoomed = useSelector((state: RootState) => state.zoom.isZoomed)
  const transformOrigin = useSelector(
    (state: RootState) => state.transformOrigin.value
  )
  const selectedPrint = useSelector(
    (state: RootState) => state.selectedPrint.value
  )

  const printImages = product?.medias?.prints[selectedPrint] || []
  const availablePrints = Object.entries(product?.medias?.prints || {}).filter(
    ([images]) => images && images.length > 0
  )

  const handlePrintClick = (key: string) => {
    dispatch(setSelectedPrint(key))
    const firstImage = product?.medias?.prints[key][0]
    if (firstImage) {
      setMainImage(firstImage)
      dispatch(setSelectedPrintImage(firstImage.src))
    }
  }

  if (loading) return <p>Carregando...</p>
  if (!product) return <p>Produto não encontrado.</p>

  return (
    <>
      <ContainerStore>
        <Head>
          <title>{`${product.name} | Vânia Costura Criativa`}</title>
        </Head>
        <Breadcrumbs />
        <ProductContainer>
          <ProductImages>
            <ZoomContainer
              onMouseMove={(e) =>
                calculateMousePosition(e, (origin) =>
                  dispatch(setTransformOrigin(origin as string))
                )
              }
              onMouseEnter={() => dispatch(setIsZoomed(true))}
              onMouseLeave={() => dispatch(setIsZoomed(false))}
            >
              {mainImage && typeof mainImage.src === 'string' ? (
                <ZoomedImage
                  src={mainImage.src}
                  alt={mainImage.alt}
                  title={mainImage.alt}
                  isZoomed={isZoomed}
                  transformOrigin={transformOrigin}
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
                    dispatch(setSelectedPrintImage(image.src))
                  }}
                />
              ))}
            </ThumbnailsContainer>
          </ProductImages>
          <ProductDetails>
            <ProductName>{product.name}</ProductName>
            <div>
              <Price>{formattedPrice(product.price)}</Price>
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
                      src={getPrintImageUrl(key)} // Use URLs dinâmicas ou estáticas conforme necessário
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
                    selectedPrintImage
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
            <FreightCalculator />
          </ProductDetails>
        </ProductContainer>
      </ContainerStore>
    </>
  )
}

export default ProdutoPage

// colocar a primeira imagem de cada Print como thumbnail padrão
