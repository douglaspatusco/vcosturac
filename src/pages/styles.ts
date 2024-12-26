import { colors } from '@/styles/GlobalStyles'
import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${colors.cinza};
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding-top: 7.5em;
  background-color: ${colors.cinza};
`
