import { faUser } from '@fortawesome/free-solid-svg-icons'
import CheckoutTitle from '../CheckoutTitles'
import { Button, ShippingData } from './styles'

import { setName } from '@/store/reducers/userFormSlice'
import { setSurname } from '@/store/reducers/userFormSlice'
import { setEmail } from '@/store/reducers/userFormSlice'
import { setPhone } from '@/store/reducers/userFormSlice'
import { useDispatch } from 'react-redux'

const PersonalDataForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <ShippingData>
      <CheckoutTitle icon={faUser}>Informações de identificação</CheckoutTitle>

      <>
        <label htmlFor="">Nome</label>
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => dispatch(setName(e.target.value))}
        />
      </>
      <>
        <label htmlFor="">Sobrenome</label>
        <input
          type="text"
          placeholder="Sobrenome"
          onChange={(e) => dispatch(setSurname(e.target.value))}
        />
      </>
      <>
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
      </>
      <>
        <label htmlFor="">Telefone</label>
        <input
          type="tel"
          placeholder="Telefone"
          onChange={(e) => dispatch(setPhone(e.target.value))}
        />
      </>
      <Button type="submit" onClick={handleSubmit}>
        Continuar
      </Button>
    </ShippingData>
  )
}

export default PersonalDataForm
