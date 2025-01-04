import Head from 'next/head'

import { getFirstLetter } from '@/services/utility'

import { Card, Categories, Imagem } from './styles'
import { useFetchProducts } from '@/hooks/useFetchProducts'

const Loja = () => {
  const { loading, products } = useFetchProducts()

  if (loading) return <p>Carregando...</p>

  // Obter todas as categorias únicas
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  )

  return (
    <>
      <Head>
        <title>Loja | Vânia Costura Criativa</title>
      </Head>
      <Categories>
        <h1>Bem-vindo à Loja!</h1>
        <p>Escolha uma categoria para explorar:</p>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <Card href={`/loja/${category}`}>
                <Imagem
                  src={
                    typeof products.find((item) => item.category === category)
                      ?.medias?.thumbnail === 'string'
                      ? (products.find((item) => item.category === category)
                          ?.medias?.thumbnail as string)
                      : ''
                  }
                  alt={category}
                  title={getFirstLetter(`${category}`)}
                />
                <h3>{getFirstLetter(category)}</h3>
              </Card>
            </li>
          ))}
        </ul>
      </Categories>
    </>
  )
}

export default Loja
