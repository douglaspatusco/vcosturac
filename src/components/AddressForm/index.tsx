import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import ShippingPage from '../Freight'
import CheckoutTitle from '../CheckoutTitles'

import { Button, ShippingData } from './styles'

import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import { setStreet } from '@/store/reducers/addressFormSlice'
import { setNumber } from '@/store/reducers/addressFormSlice'
import { setComplement } from '@/store/reducers/addressFormSlice'
import { setNeighborhood } from '@/store/reducers/addressFormSlice'
import { setCity } from '@/store/reducers/addressFormSlice'
import { setState } from '@/store/reducers/addressFormSlice'

import { useDispatch } from 'react-redux'

const AddressForm = () => {
  const addressForm = useSelector((state: RootState) => state.addressForm)
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const time = new Date().toLocaleString()
    const timeOnlyNumbers = time.replace(/[^0-9]/g, '') // Remove tudo que não for número
    const timeStamp = timeOnlyNumbers.slice(0, 14) // Pega os primeiros 14 dígitos (ano, mês, dia, hora, minuto e segundo)

    console.log(`Formulário enviado em: ${time}`)
    console.log(`Timestamp formatado: ${timeStamp}`)
    console.log(`Dados de Entrega:`, {
      addressForm,
    })
  }

  return (
    <ShippingData>
      <CheckoutTitle icon={faLocationDot}>Endereço de Entrega</CheckoutTitle>
      <>
        <label htmlFor="street">Rua</label>
        <input
          type="text"
          id="street"
          placeholder="Rua"
          onChange={(e) => dispatch(setStreet(e.target.value))}
        />
      </>
      <>
        <label htmlFor="number">Número</label>
        <input
          type="text"
          id="number"
          placeholder="Número"
          onChange={(e) => dispatch(setNumber(e.target.value))}
        />
      </>
      <>
        <label htmlFor="complement">Complemento</label>
        <input
          type="text"
          id="complement"
          placeholder="Complemento (opcional)"
          onChange={(e) => dispatch(setComplement(e.target.value))}
        />
      </>
      <>
        <label htmlFor="neighborhood">Bairro</label>
        <input
          type="text"
          id="neighborhood"
          placeholder="Bairro"
          onChange={(e) => dispatch(setNeighborhood(e.target.value))}
        />
      </>
      <>
        <label htmlFor="city">Cidade</label>
        <input
          type="text"
          id="city"
          placeholder="Cidade"
          onChange={(e) => dispatch(setCity(e.target.value))}
        />
      </>
      <>
        <label htmlFor="state">Estado</label>
        <input
          type="text"
          id="state"
          placeholder="Estado"
          onChange={(e) => dispatch(setState(e.target.value))}
        />
      </>
      <ShippingPage />
      <Button type="submit" onClick={handleSubmit}>
        Finalizar
      </Button>
    </ShippingData>
  )
}

export default AddressForm
