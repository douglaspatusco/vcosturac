import { colors } from '@/styles/GlobalStyles'
import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

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

export const Form = styled.div`
  input {
    align-content: center;
    text-align: center;
    height: 2em;
    width: 10em;
    padding: 0.5em;
    margin-right: 1em;
    font-size: 1em;
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
