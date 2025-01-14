import styled from 'styled-components'
import Image from 'next/image'
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

export const CartTableContainer = styled.table`
  display: grid;
  grid-template-rows: auto; /* Cada linha é criada automaticamente */
  gap: 1em;
  width: 100%;
  padding: 1em;
  border: 0.0625em solid ${colors.cinza};
  border-radius: 0.25em;
  list-style: none;
`

export const TableBody = styled.tbody`
  display: grid;
  grid-template-rows: auto;
`

export const TableRow = styled.td`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  gap: 1em;
  padding: 1em;
  border-bottom: 0.0625em solid ${colors.cinza};
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

export const CellBody = styled(CellProduct)``

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

/* SHIPPING */

export const ShippingAndTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 50%;
`

export const ShippingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  border: 0.0625em solid ${colors.cinza};
  border-radius: 0.25em;
`

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
