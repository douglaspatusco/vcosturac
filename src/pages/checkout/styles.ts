import styled from 'styled-components'
import { colors } from '@/styles/GlobalStyles'

export const ContainerWhite = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  width: 100%;
  padding-top: 2em;
  background-color: ${colors.branco};
  box-shadow:
    0.375em 0 0.75em rgba(0, 0, 0, 0.2),
    -0.375em 0 0.75em rgba(0, 0, 0, 0.2);
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2em;
  padding: 4em;
  width: 1280px;
`

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 100%;
`

export const Resume = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
`

export const CartProductsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: auto;
  padding: 1em;
  border: 0.0625em solid ${colors.cinzaEscuro};
  border-radius: 0.25em;
  list-style: none;
  background-color: ${colors.cinza};
`
