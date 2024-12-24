import { useState } from 'react'
import ShippingOptions from '../ShippingOptions'

import { Container, Form } from './styles'

const ShippingPage = () => {
  const [cepDestino, setCepDestino] = useState('')
  const [shippingOptions, setShippingOptions] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleCalculate = async () => {
    if (!cepDestino) {
      alert('Por favor, insira o CEP de destino.')
      return
    }

    setIsLoading(true)

    const response = await fetch('/api/calculateShipping', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cepDestino }),
    })

    if (response.ok) {
      const result = await response.json()
      setShippingOptions(result)
    } else {
      alert('Erro ao calcular o frete')
    }

    setIsLoading(false)
  }

  return (
    <Container>
      <h4>Calcular Frete</h4>
      <Form>
        <input
          type="text"
          placeholder="CEP de destino"
          value={cepDestino}
          onChange={(e) => setCepDestino(e.target.value)}
        />
        <button onClick={handleCalculate} disabled={isLoading}>
          OK
        </button>
      </Form>
      <a
        href="https://buscacepinter.correios.com.br/app/endereco/index.php"
        target="_blank"
        title="Clique aqui para encontrar o seu CEP"
      >
        Não sei o meu CEP
      </a>
      <div>
        {isLoading && <p>Calculando...</p>}
        {shippingOptions.length > 0 && (
          <ShippingOptions options={shippingOptions} />
        )}
      </div>
    </Container>
  )
}

export default ShippingPage
