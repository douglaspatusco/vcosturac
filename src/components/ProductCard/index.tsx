type Props = {
  product: Product
}


const ProductCard = ({product}: Props) => {
  return (
    <h1>
      {product.name}
    </h1>
  )
}
