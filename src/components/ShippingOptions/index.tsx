// components/ShippingOptions.tsx
import React from 'react';

interface ShippingOption {
  name: string;
  price: string;
  delivery_time: string;
  company: {
    picture: string
  }
}

interface ShippingOptionsProps {
  options: ShippingOption[];
}

const ShippingOptions: React.FC<ShippingOptionsProps> = ({ options }) => {
  return (
    <div style={styles.container}>
      {options.map((option, index) => (
        <div key={index} style={styles.card}>
          <img src={option.company.picture} alt={option.name} style={styles.logo} />
          <h3>{option.name}</h3>
          <p>Preço: <strong>R$ {option.price}</strong></p>
          <p>Prazo de entrega: <strong>{option.delivery_time}</strong></p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
    padding: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    maxWidth: '100px',
    margin: '0 auto 16px',
  },
};

export default ShippingOptions;
