import { getFirstLetter } from '@/services/utility'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface Props {
  produtos: Product[]
  categoria: string
}

const CategoryPage = ({ produtos, categoria }: Props) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <Head>
        <title>{`${getFirstLetter(categoria as string)} | Vânia Costura Criativa`}</title>
      </Head>
      <div>
        <h1>Produtos da categoria: {getFirstLetter(categoria)}</h1>
        <ul>
          {produtos.map((produto) => (
            <li key={produto.id}>
              {produto.name} - R$ {produto.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default CategoryPage;

// Gera as rotas estáticas para cada categoria
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/products')
  const produtos: Product[] = await res.json()

    // Obtém categorias únicas
  const categorias = [...new Set(produtos.map((produto) => produto.category))]

  // Gera as rotas
  const paths = categorias.map((categoria) => ({
    params: { category: categoria },
  }))

  return { paths, fallback: true } // fallback: true permite gerar páginas dinâmicas caso necessário
}

// Busca os produtos da categoria selecionada
export const getStaticProps: GetStaticProps = async (context) => {
  const categoria = context.params?.category as string

  if (!categoria) {
    return { notFound: true }
  }

  const res = await fetch('http://localhost:3000/api/products')
  const prod: Product[] = await res.json();
  const produtosFiltrados = prod.filter((produto) => produto.category === categoria
);

  if (produtosFiltrados.length === 0) {
    return {
      notFound: true, // Retorna uma página 404
    }
  }

  return {
    props: {
      produtos: produtosFiltrados,
      categoria,
    },
    revalidate: 10,
  }
}
