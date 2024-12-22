import { Card, Container } from './styles'

interface ShippingOption {
  name: string
  price: string
  delivery_time: string
  company: {
    picture: string
  }
}

interface ShippingOptionsProps {
  options: ShippingOption[]
}

const ShippingOptions: React.FC<ShippingOptionsProps> = ({ options }) => {
  return (
    <Container>
      {options.map((option, index) => (
        <Card key={index}>
          <img src={option.company.picture} alt={option.name} />
          <h5>{option.name}</h5>
          <p>Preço: <strong>R$ {option.price}</strong></p>
          <p>Prazo de entrega: <strong>{option.delivery_time}</strong> dias úteis</p>
        </Card>
      ))}
    </Container>
  )
}


export default ShippingOptions
