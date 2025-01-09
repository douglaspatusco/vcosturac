import Image from 'next/image'
import { Card, Container } from './styles'
import PropTypes from 'prop-types'

const ShippingOptions: React.FC<ShippingOptionsProps> = ({ options }) => {
  return (
    <Container>
      {options.map((option, index) => (
        <Card key={index}>
          <Image
            src={option.company.picture}
            alt={option.name}
            width={100}
            height={100}
          />
          <h5>{option.name}</h5>
          <p>
            Preço: <strong>R$ {option.price}</strong>
          </p>
          <p>
            Prazo de entrega: <strong>{option.delivery_time}</strong> dias úteis
          </p>
        </Card>
      ))}
    </Container>
  )
}

ShippingOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      delivery_time: PropTypes.string.isRequired,
      company: PropTypes.shape({
        picture: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default ShippingOptions
