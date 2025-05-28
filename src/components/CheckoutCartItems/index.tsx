import { getFirstLetter, formattedPrice } from '@/services/utility'
import { removeItem } from '@/utils/cartUtils'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import DeleteProduct from '@/components/DeleteProduct'
import {
  CartProductsItem,
  ImageAndDescription,
  ImageContainer,
  ProductDescription,
  ProductImage,
  ProductLength,
  ProductPrice,
} from './styles'

const CheckoutCartItem = ({ product }: { product: Product }) => {
  const dispatch = useDispatch()
  return (
    <CartProductsItem
      key={`${product.id}-${product.selectedPrint}-${product.selectedPrintAlt}`}
    >
      <ImageAndDescription>
        <ImageContainer>
          <Link
            href={{
              pathname: `/loja/${product.category}/${product.slug}`,
              query: {
                estampa: product.selectedPrint,
                imagem: product.selectedPrintAlt?.toLowerCase(),
              },
            }}
          >
            <ProductImage
              src={product.selectedPrintImage || '/default-thumbnail.jpg'}
              alt={product.name}
              width={100}
              height={100}
            />
            <ProductLength>{product.quantity}</ProductLength>
          </Link>
        </ImageContainer>
        <ProductDescription>
          <h3>{product.name} </h3>
          <h4>{getFirstLetter(product.selectedPrint)}</h4>
        </ProductDescription>
      </ImageAndDescription>
      <ProductPrice>
        <span>
          {product.price !== undefined
            ? formattedPrice(product.price * product.quantity)
            : 'Preço indisponível'}
        </span>
      </ProductPrice>
      <DeleteProduct
        onClick={() =>
          removeItem(
            dispatch,
            product.id,
            product.selectedPrint,
            product.selectedPrintAlt ?? ''
          )
        }
        $isCheckout={true}
      />
    </CartProductsItem>
  )
}

export default CheckoutCartItem
