import { colors } from '@/styles/GlobalStyles'
import { styled } from 'styled-components'

export const DeleteItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5em;
  height: 1.5em;
  border: none;
  border-radius: 0.25em;
  font-size: 1em;
  cursor: pointer;
  background-color: ${colors.branco};

  &:hover {
    background-color: ${colors.cinza};
    border-radius: 0.25em;
  }

  svg {
    width: 1em;
    height: 1em;
  }
`
