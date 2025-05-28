import { faUser } from '@fortawesome/free-solid-svg-icons'
import CheckoutTitle from '../CheckoutTitles'
import { ShippingData } from './styles'

const PersonalDataForm = () => (
  <ShippingData>
    <CheckoutTitle icon={faUser}>Informações Pessoais</CheckoutTitle>

    <>
      <label htmlFor="">Nome</label>
      <input type="text" placeholder="Nome" />
    </>
    <>
      <label htmlFor="">Sobrenome</label>
      <input type="text" placeholder="Sobrenome" />
    </>
    <>
      <label htmlFor="">Email</label>
      <input type="email" placeholder="Email" />
    </>
    <>
      <label htmlFor="">Telefone</label>
      <input type="tel" placeholder="Telefone" />
    </>
  </ShippingData>
)

export default PersonalDataForm
