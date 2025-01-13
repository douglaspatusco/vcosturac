import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { clearFreight } from '@/store/reducers/shippingSlice'

import ShippingOptions from '../ShippingOptions'

import { handleCalculateShipping } from '@/utils/shippingUtils'

import { Button, Container, Form } from './styles'

const ShippingPage = () => {
  const [cepDestino, setCepDestino] = useState('')
  const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()

  const handleCalculate = () => {
    handleCalculateShipping(cepDestino, setShippingOptions, setIsLoading)
  }

  const handleReset = () => {
    setCepDestino('')
    setShippingOptions([])
    dispatch(clearFreight())
  }

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value
    const numericValue = rawValue.replace(/\D/g, '').slice(0, 8)

    setCepDestino(numericValue)
  }

  return (
    <Container>
      <h4>Calcular Frete</h4>
      <Form>
        <input
          type="text"
          placeholder="CEP de destino"
          value={cepDestino}
          onChange={handleCepChange}
          maxLength={8} // Apenas por segurança
        />
        <Button
          onClick={handleCalculate}
          disabled={isLoading || cepDestino.length !== 8}
        >
          BUSCAR
        </Button>
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
          <>
            <ShippingOptions options={shippingOptions} />
            <Button onClick={handleReset}>Limpar</Button>
          </>
        )}
      </div>
    </Container>
  )
}

export default ShippingPage
