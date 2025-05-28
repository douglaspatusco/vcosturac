import { colors } from '@/styles/GlobalStyles'
import styled from 'styled-components'

export const ShippingData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  padding: 1em;
  border-radius: 0.25em;
  border: 1px solid ${colors.cinzaEscuro};
  background-color: ${colors.cinza};

  input {
    padding: 0.25em;
    height: 2.5em;

    &::placeholder {
      position: relative;
      top: -4px;
    }
  }

  > label {
    display: none;
  }
`
