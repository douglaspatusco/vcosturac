import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { clearFreight } from '@/store/reducers/shippingSlice'
import { setCEP, clearCEP } from '@/store/reducers/addressFormSlice'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'

import ShippingOptions from '../ShippingOptions'

import { handleCalculateShipping } from '@/utils/shippingUtils'

import { Button, Container, Form } from './styles'

const ShippingPage = () => {
  const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const cepDestino = useSelector((state: RootState) => state.addressForm.cep)

  const dispatch = useDispatch()

  const handleCalculate = () => {
    handleCalculateShipping(cepDestino, setShippingOptions, setIsLoading)
    console.log('Calculando frete para o CEP:', cepDestino)
  }

  const handleReset = () => {
    dispatch(clearCEP())
    setShippingOptions([])
    dispatch(clearFreight())
  }

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value
    const numericValue = rawValue.replace(/\D/g, '').slice(0, 8)

    dispatch(setCEP(numericValue))
  }

  return (
    <Container>
      <Form>
        <input
          type="text"
          placeholder="CEP"
          value={cepDestino}
          onChange={handleCepChange}
          maxLength={8} // Apenas por segurança
        />
        <Button
          onClick={handleCalculate}
          disabled={isLoading || cepDestino.length !== 8}
        >
          Calcular Frete
        </Button>
        {shippingOptions.length > 0 && (
          <>
            <Button onClick={handleReset}>Limpar</Button>
          </>
        )}
      </Form>
      <a
        href="https://buscacepinter.correios.com.br/app/endereco/index.php"
        target="_blank"
        title="Clique aqui para encontrar o seu CEP"
        rel="noreferrer"
      >
        Não sei o CEP
      </a>
      {isLoading && <p>Calculando...</p>}
      {shippingOptions.length > 0 && (
        <>
          <ShippingOptions options={shippingOptions} />
        </>
      )}
    </Container>
  )
}

export default ShippingPage
