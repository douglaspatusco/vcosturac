import Image from 'next/image'
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
              Prazo de entrega: <strong>{option.delivery_time}</strong> dias
              úteis
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
