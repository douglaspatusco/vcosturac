import { colors } from '@/styles/GlobalStyles'
import { styled } from 'styled-components'

interface DeleteItemProps {
  $isCheckout: boolean
}

export const DeleteItem = styled.button<DeleteItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${({ $isCheckout }) => ($isCheckout ? 'relative' : 'absolute')};
  top: ${({ $isCheckout }) => ($isCheckout ? '-1.5em' : '0.25em')};
  right: ${({ $isCheckout }) => ($isCheckout ? '-0.5em' : '0.25em')};
  width: 1.5em;
  height: 1.5em;
  border: none;
  border-radius: 0.25em;
  font-size: 1em;
  cursor: pointer;
  background-color: ${({ $isCheckout }) =>
    $isCheckout ? colors.cinza : colors.marromClaro};
  fill: ${({ $isCheckout }) => ($isCheckout ? colors.preto : colors.branco)};

  &:hover {
    background-color: ${({ $isCheckout }) =>
      $isCheckout ? colors.cinzaEscuro : colors.marrom};
    border-radius: 0.25em;
  }

  svg {
    width: 1em;
    height: 1em;
  }
`
