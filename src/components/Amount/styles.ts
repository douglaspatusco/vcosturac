import { styled } from 'styled-components'
import { colors } from '@/styles/GlobalStyles'

interface AmountFieldProps {
  isCheckout: boolean
}

export const AmountField = styled.div<AmountFieldProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ isCheckout }) =>
    isCheckout ? 'transparent' : colors.marromClaro};

  span {
    padding: 0 0.5em;
    font-size: 1em;
    cursor: pointer;
    user-select: none;
    border-radius: 0.25em;

    &:hover {
      background-color: ${({ isCheckout }) =>
        isCheckout ? colors.creme : colors.marromEscuro};
    }

    &:active {
      transform: scale(1.1);
    }
  }

  &:focus-visible {
    outline: none;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    width: 2em;
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    border: none;
    outline: none;
    appearance: textfield;
    background-color: transparent;
    color: ${({ isCheckout }) => (isCheckout ? colors.preto : colors.cinza)};
  }
`
