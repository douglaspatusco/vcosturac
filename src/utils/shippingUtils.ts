export const handleCalculateShipping = async (
  cepDestino: string,
  setShippingOptions: React.Dispatch<React.SetStateAction<unknown[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (!cepDestino) {
    alert('Por favor, insira o CEP de destino.')
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
      const result = await response.json()
      setShippingOptions(result)
    } else {
      alert('Erro ao calcular o frete')
    }
  } catch (error) {
    console.error('Erro ao calcular o frete:', error)
    alert('Erro ao calcular o frete')
  } finally {
    setIsLoading(false)
  }
}
