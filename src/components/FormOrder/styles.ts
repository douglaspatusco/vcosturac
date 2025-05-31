import { colors } from '@/styles/GlobalStyles'
import styled from 'styled-components'

export const OrderForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 100%;
`

export const FormSection = styled.div`
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
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  font-size: 0.875em;
  color: red;

  > label {
    display: none;
  }
`

export const Button = styled.button`
  border: 0.0625em solid;
  border-radius: 0.25em;
  padding: 0.5em;
  font-size: 1em;
  color: ${colors.creme};
  background-color: ${colors.salmao};
  cursor: pointer;

  &:hover {
    background-color: ${colors.salmaoClaro};
  }
`
