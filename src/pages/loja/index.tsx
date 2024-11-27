'use client'

import Head from 'next/head'
import {
  BuyButton,
  ProductContainer,
  ContainerStore,
  Prints,
  ProductDetails,
  Amount,
  ContainerBuy,
  ProductName,
  Price,
  Description,
  ProductImages,
  ThumbnailsContainer,
  ZoomedImage,
  Thumbnail,
  ZoomContainer,
} from './styles'
import { useEffect, useState } from 'react'

interface Image {
  src: string
  alt: string
}

const floral =
  'https://cdn.awsli.com.br/2500x2500/2220/2220511/produto/176766434/tecidos-tricoline-tecido-tricoline-digital-flores-ref-9017-cor-304--p-1690983761-viv6bctvh3.png'
const listrado =
  'https://images.tcdn.com.br/img/img_prod/1057913/estampa_listrado_texturizado_577_1_97a65b787864bc1cc60c02262baee29c.jpg'
const geometrico =
  'https://img.freepik.com/vetores-premium/estampa-geometrica_598830-6.jpg'
const corSemEstampa =
  'https://w7.pngwing.com/pngs/349/570/png-transparent-colorful-rainbow-gradient-colorful-rainbow-gradient-colorful-rainbow-circle-gradual-change.png'

const images: Image[] = [
  {
    src: 'https://images.tcdn.com.br/img/img_prod/886231/mochila_masculina_18_schock_preta_5907_1_9f65b96a1a223c80fe5bd40562cad95c.jpg',
    alt: 'Imagem 1',
  },
  {
    src: 'https://cdn.dooca.store/1780/products/mochila-feminina-rebecca-bonbon-clio-rb24042-rosa-3_1600x1600+fill_ffffff.jpeg',
    alt: 'Imagem 2',
  },
  {
    src: 'https://images.tcdn.com.br/img/img_prod/886231/mochila_masculina_18_matelasse_azul_5891_1_5338f7fda7f60f12a50fd28032a85736.jpg',
    alt: 'Imagem 3',
  },
  // ... mais imagens
]

const Loja = () => {
  const [value, setValue] = useState(1)
  const [items, setItems] = useState([])

  const [mainImage, setMainImage] = useState(images[0])
  const handleThumbnailClick = (image: Image) => {
    setMainImage(image)
  }

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('/api/items')
      const data = await response.json()
      setItems(data)
    }

    fetchItems()
  }, [])

  // Funções de quantidade dos produtos
  const increment = () => setValue((prevValue) => prevValue + 1)

  const decrement = () =>
    setValue((prevValue) => (prevValue > 1 ? prevValue - 1 : prevValue))

  return (
    <ContainerStore>
      <Head>
        <title>Loja | Vânia Costura Criativa</title>
      </Head>

      <ProductContainer>
        <ProductImages>
          <ZoomContainer>
            <ZoomedImage src={mainImage.src} alt={mainImage.alt} />
          </ZoomContainer>
          <ThumbnailsContainer>
            {images.map((image) => (
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
          {items.map((item: any) => (
            <ProductName>{item.name}</ProductName>
          ))}
          <div>
            <Price>R$ 399,90</Price>
            <span><b>2x</b> de <b>R$ 199,95</b> sem juros</span>
          </div>
          <form action="/comprar/">
            <Prints>
              <p>Estampas: </p>
              <div>
                <img title="Floral" alt="Floral" src={floral} />
                <img title="Listrado" alt="Listrado" src={listrado} />
                <img title="Geométrico" alt="Geométrico" src={geometrico} />
                <img title="Cor sem estampa" alt="Cor sem estampa" src={corSemEstampa}  />
              </div>
            </Prints>
            <ContainerBuy>
              <Amount>
                <span onClick={decrement}>-</span>
                <input
                  type="number"
                  value={value}
                  readOnly
                  onChange={(e) => setValue(e.target.value)}
                />
                <span onClick={increment}>+</span>
              </Amount>
              <BuyButton type="submit">COMPRAR</BuyButton>{' '}
              {/*Na verdade será adicionado ao carrinho, então vai abrir uma modal com opções de continuar comprando ou finalizar a compra*/}
            </ContainerBuy>
          </form>
          <Description>
            <p>
              A companheira ideal para suas expedições mais desafiadoras.
              <br />
              Projetada para oferecer máximo conforto e durabilidade, ela
              combina design ergonômico com materiais de alta qualidade.
              <br />
              <br />
              <b>Detalhes:</b>
              <br />
              Capacidade: 50 litros.
              <br />
              Material: Tecido impermeável.
              <br />
              Conforto: Alças acolchoadas e ajustáveis, interior acolchoado.
              <br />
              Organização: Múltiplos compartimentos internos e externos.
              <br />
              Durabilidade: Confeccionada para resistir a condições extremas.
              <br />
            </p>
          </Description>
        </ProductDetails>
      </ProductContainer>
    </ContainerStore>
  )
}

export default Loja
