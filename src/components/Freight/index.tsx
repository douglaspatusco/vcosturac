import { useState } from 'react'
import { ShippingOption } from '@/types/shipping'

import ShippingOptions from '../ShippingOptions'

import { handleCalculateShipping } from '@/utils/shippingUtils'

import { Container, Form } from './styles'

const ShippingPage = () => {
  const [cepDestino, setCepDestino] = useState('')

  const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleCalculate = () => {
    handleCalculateShipping(cepDestino, setShippingOptions, setIsLoading)
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
          BUSCAR
        </button>
      </Form>
      <a
        href="https://buscacepinter.correios.com.br/app/endereco/index.php"
        target="_blank"
        title="Clique aqui para encontrar o seu CEP"
        rel="noreferrer"
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
