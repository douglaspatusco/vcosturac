import styled from 'styled-components'
import Image from 'next/image'
import { colors } from '@/styles/GlobalStyles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  width: 100%;
  padding: 2em 0;
`

export const CartTableContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-rows: auto; /* Cada linha é criada automaticamente */
  gap: 1em;
  padding: 0;
  margin: 0;
  border: 0.0625em solid #e5e5e5;
  border-radius: 0.5em;
  padding: 1em;
`

export const Header = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;
  align-items: center;
  justify-items: center;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${colors.cinza};
  padding: 1em;
  border-bottom: 2px solid #ccc;
`

export const Row = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;
  padding: 1em;
  border-bottom: 0.0625em solid #eee;

  &:last-child {
    border-bottom: none;
  }
`

export const CellProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  img {
    margin-bottom: 1em;
  }

  h4 {
    margin-bottom: 0.5em;
  }
`

export const CellBody = styled(CellProduct)`
  background-color: red;
`

export const ProductImage = styled(Image)`
  width: 6em;
  height: 6em;
  object-fit: cover;
  mix-blend-mode: darken;
`

export const Infos = styled.li`
  display: flex;
  flex-direction: row;

  background-color: blue;
`
