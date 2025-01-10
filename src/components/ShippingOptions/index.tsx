import { Card, Container, Option } from './styles'
import PropTypes from 'prop-types'
import { useState } from 'react'

const ShippingOptions: React.FC<ShippingOptionsProps> = ({ options }) => {
  const [selectedFreight, setSelectedFreight] = useState<{
    name: string
    price: string
  } | null>(null)

  const handleSelect = (options: { name: string; price: string }) => {
    setSelectedFreight(options)
  }

  return (
    <Container>
      {options.map((option, index) => (
        <Option
          key={option.name}
          selected={selectedFreight?.name === option.name}
        >
          <input
            key={option.name}
            type="checkbox"
            checked={selectedFreight?.name === option.name}
            onChange={() => handleSelect(option)}
          />
          <Card key={index} selected={selectedFreight?.name === option.name}>
            <div>
              <h5>{option.name}</h5>
              <p>
                <strong>R$ {option.price}</strong>
              </p>
            </div>
            <p>
              Prazo: <strong>{option.delivery_time}</strong> dias úteis
            </p>
          </Card>
        </Option>
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
