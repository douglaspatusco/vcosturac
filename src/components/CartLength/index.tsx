import { CartLengthStyled } from './styles'
import PropTypes from 'prop-types'

interface CartLengthProps {
  children: React.ReactNode
}

const CartLength: React.FC<CartLengthProps> = ({ children }) => {
  return <CartLengthStyled>{children}</CartLengthStyled>
}

CartLength.propTypes = {
  children: PropTypes.element.isRequired,
}

export default CartLength
