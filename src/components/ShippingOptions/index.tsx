import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store'
import { setSelectedFreight } from '@/store/reducers/shippingSlice'

import PropTypes from 'prop-types'
import { Card, Container, CustomCheckbox, Option } from './styles'

const ShippingOptions: React.FC<ShippingOptionsProps> = ({ options }) => {
  const dispatch = useDispatch()
  const selectedFreight = useSelector(
    (state: RootState) => state.shipping.selectedFreight
  )

  const handleSelect = (option: { name: string; price: string }) => {
    dispatch(setSelectedFreight(option))
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
          <CustomCheckbox selected={selectedFreight?.name === option.name} />
          <Card key={index} selected={selectedFreight?.name === option.name}>
            <div>
              <h5>{option.name}</h5>
              <p>
                <strong>R$ {option.price}</strong>
              </p>
            </div>
            <p>
              Entrega em até <strong>{option.delivery_time}</strong> dias úteis
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
