// pages/shipping.tsx
import React, { useState } from 'react';
import ShippingOptions from '../ShippingOptions';

const ShippingPage = () => {
  const [cepDestino, setCepDestino] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleCalculate = async () => {
    if (!cepDestino) {
      alert('Por favor, insira o CEP de destino.');
      return;
    }

    setIsLoading(true);

    const response = await fetch('/api/calculateShipping', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cepDestino }),
    });

    if (response.ok) {
      const result = await response.json();
      setShippingOptions(result);
    } else {
      alert('Erro ao calcular o frete');
    }

    setIsLoading(false);
  };

  return (
    <div>
      <h1>Calculadora de Frete</h1>
      <input
        type="text"
        placeholder="Digite o CEP de destino"
        value={cepDestino}
        onChange={(e) => setCepDestino(e.target.value)}
      />
      <button onClick={handleCalculate} disabled={isLoading}>
        Calcular Frete
      </button>

      {isLoading && <p>Calculando...</p>}
      {shippingOptions.length > 0 && <ShippingOptions options={shippingOptions} />}
    </div>
  );
};

export default ShippingPage;
