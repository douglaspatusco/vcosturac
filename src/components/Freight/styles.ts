import { colors } from '@/styles/GlobalStyles'
import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  height: 100%;

  a {
    position: relative;
    width: fit-content;
    bottom: 1em;
    margin-bottom: 0.5em;
    font-size: 0.75em;
    text-decoration: underline;
    color: ${colors.salmao};
  }
`

export const FormCEP = styled.div`
  display: flex;
  gap: 1em;

  &::placeholder {
    position: relative;
    top: -4px;
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
