import { faUser } from '@fortawesome/free-solid-svg-icons'
import CheckoutTitle from '../CheckoutTitles'
import { Button, ShippingData } from './styles'
import { useState } from 'react'

const PersonalDataForm = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(`Dados do Usuário:`, { name, surname, email, phone })
  }
  // Note: The handleSubmit function is defined but not used in this component.
  // It can be used to handle form submission if needed.

  return (
    <ShippingData>
      <CheckoutTitle icon={faUser}>Informações de identificação</CheckoutTitle>

      <>
        <label htmlFor="">Nome</label>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </>
      <>
        <label htmlFor="">Sobrenome</label>
        <input
          type="text"
          placeholder="Sobrenome"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </>
      <>
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </>
      <>
        <label htmlFor="">Telefone</label>
        <input
          type="tel"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </>
      <Button type="submit" onClick={handleSubmit}>
        Continuar
      </Button>
    </ShippingData>
  )
}

export default PersonalDataForm
