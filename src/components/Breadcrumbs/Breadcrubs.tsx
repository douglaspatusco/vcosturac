import { useRouter } from 'next/router'

import { Container, List } from './styles'
import { getFirstLetter } from '@/services/utility'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import Link from 'next/link'

const Breadcrumbs = () => {
  const { categoria, produto } = useRouter().query
  const { products } = useSelector((state: RootState) => state.products)
  const product = products.find((product) => product.slug === produto)

  return (
    <Container>
      <List>
        <li>
          <Link href={`/loja`}>Categorias</Link>
        </li>
        <span>&nbsp;&gt;&nbsp;</span>
        {categoria && (
          <li>
            <Link href={`/loja/${categoria}`}>
              {getFirstLetter(categoria as string)}
            </Link>
          </li>
        )}
        {categoria && produto && <span>&nbsp; &gt; &nbsp;</span>}
        {produto && product && <li>{product.name}</li>}
      </List>
    </Container>
  )
}

export default Breadcrumbs
