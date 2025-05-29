import { colors } from '@/styles/GlobalStyles'
import styled from 'styled-components'

export const ContainerStore = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  width: 100%;
  padding-top: 2em;
  background-color: #fff;
  box-shadow:
    0.375em 0 0.75em rgba(0, 0, 0, 0.2),
    -0.375em 0 0.75em rgba(0, 0, 0, 0.2);
`

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2em;
  padding: 2em;

  form {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }
`

export const ProductImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 100%;
`

export const ProductName = styled.h1`
  font-size: 2em;
  font-weight: 400;
`

export const Price = styled.h3`
  font-size: 2em;
  font-weight: 600;
  color: ${colors.salmao};
`

export const ContainerBuy = styled.div`
  display: flex;
  gap: 2em;
`

export const BuyButton = styled.button`
  color: ${colors.creme};
  border: 1px solid;
  border-radius: 0.25em;
  font-size: 1em;
  padding: 0.55em;
  background-color: ${colors.salmao};
  width: 200px;
  cursor: pointer;

  &:hover {
    box-shadow:
      0 0.0625em 0.125em 0 rgba(0, 0, 0, 0.3),
      0 0.125em 0.375em 0.125em rgba(0, 0, 0, 0.15);
  }

  &:active {
    background-color: ${colors.salmaoClaro};
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`
