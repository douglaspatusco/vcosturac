export const handleCalculateShipping = async (
  cepDestino: string,
  setShippingOptions: React.Dispatch<React.SetStateAction<ShippingOption[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (!cepDestino) {
    alert('Por favor, insira o CEP de destino.')
    return
  }

  const cepRegex = /^[0-9]{5}-?[0-9]{3}$/
  if (!cepRegex.test(cepDestino)) {
    alert('Por favor, insira um CEP válido.')
    return
  }

  setIsLoading(true)

  try {
    const response = await fetch('/api/calculateShipping', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cepDestino }),
    })

    if (response.ok) {
      try {
        const result = await response.json()
        setShippingOptions(result)
      } catch (jsonError) {
        console.error('Erro ao processar a resposta JSON:', jsonError)
        alert('Erro ao processar a resposta do servidor')
      }
    } else {
      const errorText = await response.text()
      console.error('Erro ao calcular o frete:', errorText)
      alert(`Erro ao calcular o frete: ${errorText}`)
    }
  } catch (error) {
    console.error('Erro ao calcular o frete:', error)
    alert('Erro ao calcular o frete')
  } finally {
    setIsLoading(false)
  }
}

// Definição do tipo ShippingOption (exemplo)
interface ShippingOption {
  // Defina os campos esperados aqui
  id: string
  name: string
  price: number
  deliveryTime: string
}
