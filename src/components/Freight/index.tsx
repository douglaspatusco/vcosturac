import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Inputmask from 'react-input-mask'

import { RootState } from '@/store'
import { clearFreight } from '@/store/reducers/shippingSlice'
import { setCEP, clearCEP } from '@/store/reducers/formOrderSlice'

import ShippingOptions from '../ShippingOptions'

import { handleCalculateShipping } from '@/utils/shippingUtils'

import { Button, Container, FormCEP } from './styles'

const ShippingPage = () => {
  const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const destinationCEP = useSelector((state: RootState) => state.formOrder.cep)

  const dispatch = useDispatch()

  const handleCalculate = () => {
    handleCalculateShipping(destinationCEP, setShippingOptions, setIsLoading)
    console.log('Calculando frete para o CEP:', destinationCEP)
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
      <FormCEP>
        <Inputmask
          mask="99999-999"
          maskChar=""
          type="text"
          placeholder="CEP"
          value={destinationCEP}
          onChange={handleCepChange}
        />
        <Button
          onClick={handleCalculate}
          disabled={isLoading || destinationCEP.length !== 8}
        >
          Calcular Frete
        </Button>
        {shippingOptions.length > 0 && (
          <>
            <Button onClick={handleReset}>Limpar</Button>
          </>
        )}
      </FormCEP>
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
