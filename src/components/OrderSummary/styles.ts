import { colors } from '@/styles/GlobalStyles'
import styled from 'styled-components'

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  border: 0.0625em solid ${colors.cinza};
  border-radius: 0.25em;
  gap: 1em;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`
