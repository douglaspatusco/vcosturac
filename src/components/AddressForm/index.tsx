import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import ShippingPage from '../Freight'
import CheckoutTitle from '../CheckoutTitles'
import { ShippingData } from './styles'

const AddressForm = () => (
  <ShippingData>
    <CheckoutTitle icon={faLocationDot}>Endereço de Entrega</CheckoutTitle>
    <>
      <label htmlFor="">Endereço</label>
      <input type="text" placeholder="Endereço" />
    </>
    <>
      <label htmlFor="">Cidade</label>
      <input type="text" placeholder="Cidade" />
    </>
    <>
      <label htmlFor="">Estado</label>
      <input type="text" placeholder="Estado" />
    </>
    <ShippingPage />
  </ShippingData>
)

export default AddressForm
