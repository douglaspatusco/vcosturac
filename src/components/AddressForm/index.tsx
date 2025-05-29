import { useState } from 'react'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import ShippingPage from '../Freight'
import CheckoutTitle from '../CheckoutTitles'

import { Button, ShippingData } from './styles'

const AddressForm = () => {
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const time = new Date().toLocaleString()
    const timeOnlyNumbers = time.replace(/[^0-9]/g, '') // Remove tudo que não for número
    const timeStamp = timeOnlyNumbers.slice(0, 14) // Pega os primeiros 14 dígitos (ano, mês, dia, hora, minuto e segundo)

    console.log(`Formulário enviado em: ${time}`)
    console.log(`Timestamp formatado: ${timeStamp}`)
    console.log(`Dados de Entrega:`, {
      street,
      number,
      complement,
      neighborhood,
      city,
      state,
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
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
      </>
      <>
        <label htmlFor="number">Número</label>
        <input
          type="text"
          id="number"
          placeholder="Número"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </>
      <>
        <label htmlFor="complement">Complemento</label>
        <input
          type="text"
          id="complement"
          placeholder="Complemento (opcional)"
          value={complement}
          onChange={(e) => setComplement(e.target.value)}
        />
      </>
      <>
        <label htmlFor="neighborhood">Bairro</label>
        <input
          type="text"
          id="neighborhood"
          placeholder="Bairro"
          value={neighborhood}
          onChange={(e) => setNeighborhood(e.target.value)}
        />
      </>
      <>
        <label htmlFor="city">Cidade</label>
        <input
          type="text"
          id="city"
          placeholder="Cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </>
      <>
        <label htmlFor="state">Estado</label>
        <input
          type="text"
          id="state"
          placeholder="Estado"
          value={state}
          onChange={(e) => setState(e.target.value)}
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
