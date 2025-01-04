import { colors } from '@/styles/GlobalStyles'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  padding: 1em;
  background-color: ${colors.mostarda};
  box-shadow: 0em 0.25em 0.75em 0em rgba(88, 88, 88, 0.28);

  p {
    font-size: 0.75em;
  }
`
