import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';

import { RootState, AppDispatch } from '../../../store';
import { fetchProducts } from '@/store/reducers/apiSlice';

import {
  Amount,
  BuyButton,
  ContainerBuy,
  ContainerStore,
  Description,
  Price,
  Prints,
  ProductContainer,
  ProductDetails,
  ProductImages,
  ProductName,
  Thumbnail,
  ThumbnailsContainer,
  ZoomContainer,
  ZoomedImage } from './styles';
import { PrintsImages } from '@/types';
import { formattedPrice } from '@/services/utility';

const ProdutoPage = () => {
  const router = useRouter();
  const { produtoId } = router.query;

  const dispatch: AppDispatch = useDispatch();
  const { products, loading } = useSelector((state: RootState) => state.products);

  const [amountValue, setAmountValue] = useState(1)
  const [mainImage, setMainImage] = useState<PrintsImages | null>(null);
  const [selectedPrint, setSelectedPrint] = useState<string>('floral'); // Inicializa com 'floral' ou outra estampa por padrão

  const handlePrintClick = (printType: string) => {
    setSelectedPrint(printType);  // Altera o estado da estampa selecionada
  };

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products]);

  // Obtém o produto específico com base no produtoId
  const product = products.find((product) => product.id === produtoId);

  useEffect(() => {
    if (product?.medias?.thumbnail) {
      setMainImage({ src: product.medias.thumbnail, alt: product.name });
    }
  }, [product]);

  const printImages = product?.medias?.prints[selectedPrint] || []; // Filtra as imagens da estampa selecionada

  // Obter as estampas disponíveis dinamicamente
  const availablePrints = Object.entries(product?.medias?.prints || {})
    .filter(([_, images]) => images && images.length > 0);

  const incrementValue = () => setAmountValue((prevValue) => prevValue + 1)
  const decrementValue = () => setAmountValue((prevValue) => (prevValue > 1 ? prevValue - 1 : prevValue))

  const handleThumbnailClick = (image: PrintsImages) => {
    setMainImage(image)
  }

  if (loading) return <p>Carregando...</p>;
  if (!product) return <p>Produto não encontrado.</p>;

  return (
    <>
      <ContainerStore>
        <Head>
          <title>
            {`${product.name} | Vânia Costura Criativa`}
          </title>
        </Head>
      <ProductContainer>
        <ProductImages>
          <ZoomContainer>
            {mainImage ? (
              <ZoomedImage src={mainImage.src} alt={mainImage.alt} />
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
                onClick={() => handleThumbnailClick(image)}
              />
            ))}
          </ThumbnailsContainer>
        </ProductImages>
        <ProductDetails>
            <ProductName>{product.name}</ProductName>
          <div>
            <Price>{formattedPrice(product.price)}</Price>
            <span>
              ou <b>{product.division}</b> de <b>{formattedPrice(product.installment)}</b> sem juros!
            </span>
          </div>
          <form action="/comprar/">
            <Prints>
              <p>Estampas: </p>
              <div>
                {availablePrints.map(([key, _]) => (
                  <img
                    key={key}
                    onClick={() => setSelectedPrint(key)}
                    title={key.charAt(0).toUpperCase() + key.slice(1)} // Capitaliza o nome
                    alt={key}
                    src={`https://raw.githubusercontent.com/eyelexx/vcosturac/cee1a9fffd41dc999f2bb2fb733e80b78498c9da/src/public/images/facebook-logo.svg`} // Use URLs dinâmicas ou estáticas conforme necessário
                  />
                ))}
              </div>
            </Prints>
            <ContainerBuy>
              <Amount>
                <span onClick={decrementValue}>-</span>
                <input
                  type="number"
                  value={amountValue}
                  readOnly
                  onChange={(e) => setAmountValue(e.target.value)}
                />
                <span onClick={incrementValue}>+</span>
              </Amount>
              <BuyButton type="submit">ADICIONAR AO CARRINHO</BuyButton>{' '}
              {/*Na verdade será adicionado ao carrinho, então vai abrir uma modal com opções de continuar comprando ou finalizar a compra*/}
            </ContainerBuy>
          </form>
          <Description>
            <h4>Descrição:</h4>
            <p>{product.description}</p>
          </Description>
        </ProductDetails>
      </ProductContainer>
    </ContainerStore>
    </>
  );
};

export default ProdutoPage;


// colocar a primeira imagem de cada Print como thumbnail padrão
