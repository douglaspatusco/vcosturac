import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store'
import { setSelectedPrintSrc } from '@/store/reducers/selectedPrintSrcSlice'
import { setSelectedPrint } from '@/store/reducers/selectedPrintSlice'
import { setSelectedPrintAlt } from '@/store/reducers/selectedPrintAltSlice'

import { useFetchProducts } from '@/hooks/useFetchProducts'
import { useMainImage } from '@/hooks/useMainImage'
import Breadcrumbs from '@/components/Breadcrumbs'
import { ProductImagesWithZoom } from '@/components/ProductImagesWithZoom'
import { PrintSelector } from '@/components/PrintSelector'

import { formattedPrice } from '@/services/utility'
import { addToCart } from '@/utils/produtoUtils'
import { handlePrintClick } from '@/utils/handlePrintClick'

import {
  BuyButton,
  ContainerBuy,
  ContainerStore,
  Description,
  Price,
  ProductContainer,
  ProductDetails,
  ProductName,
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

  if (loading) return <p>Carregando...</p>
  if (!product) return <p>Produto não encontrado.</p>

  return (
    <ContainerStore>
      <Head>
        <title>{`${product.name} | Vânia Costura Criativa`}</title>
      </Head>
      <Breadcrumbs />
      <ProductContainer>
        <ProductImagesWithZoom
          mainImage={mainImage}
          printImages={printImages}
          setMainImage={setMainImage}
          onThumbnailClick={(image) => {
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
        <ProductDetails>
          <ProductName>{product.name}</ProductName>
          <div>
            <Price>{formattedPrice(product.price as number)}</Price>
            <span>
              ou <b>{product.division}</b> de{' '}
              <b>{formattedPrice(product.installment)}</b> sem juros!
            </span>
          </div>
          <PrintSelector
            selectedPrint={selectedPrint}
            availablePrints={availablePrints}
            onSelect={(key) =>
              handlePrintClick(
                key,
                product,
                router,
                dispatch,
                setMainImage,
                produto as string
              )
            }
          />
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
