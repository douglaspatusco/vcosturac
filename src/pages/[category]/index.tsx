import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store"
import { fetchProducts } from "@/store/reducers/apiSlice"
import { getFirstLetter } from "@/services/utility"
import { Card, Categories, Imagem } from "./styles"
import Head from "next/head"

const Categorias = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state: RootState) => state.products)

  useEffect(() => {
    if (!items.length) {
      dispatch(fetchProducts())
    }
  }, [dispatch, items])

  const categories = Array.from(new Set(items.map((product) => product.category)))

  if (loading) return <p>Carregando...</p>
  if (error) return <p>Erro: {error}</p>

  return (
    <>
      <Head>
        <title>Loja | Vânia Costura Criativa</title>
      </Head>
      <Categories>
        <h1>Categorias</h1>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <Card href={`categorias/${category}`}>
                <Imagem
                  src={items.find((item) => item.category === category)?.medias?.thumbnail || ""}
                  alt={category}
                  title={getFirstLetter(`${category}s`)}
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

export default Categorias


// Abaixo pode ter uma sessão "Conheça alguns dos nossos produtos",
// e uma lista com alguns produtos aleatórios de cada  categoria
