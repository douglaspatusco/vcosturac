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

export const Resume = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
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

export const CartProductsItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 1em;
  padding: 1em 0;

  &:not(:last-child) {
    border-bottom: 0.0625em solid ${colors.cinzaEscuro};
  }
`

export const ImageAndDescription = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  a {
    position: relative;
    background-color: #fff;
    border-radius: 0.25em;
    border: 1px solid #bababa;
  }

  h4 {
    margin-bottom: 0.5em;
  }
`

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-weight: 400;
  }

  h4 {
    color: #777777;
    font-weight: 400;
  }
`

export const ProductPrice = styled.div`
  display: flex;
  align-items: center;
`

export const ProductImage = styled(Image)`
  width: 4em;
  height: 4em;
  object-fit: cover;
  mix-blend-mode: darken;
`

export const Infos = styled.li`
  display: flex;
  flex-direction: row;

  background-color: blue;
`

export const ProductLength = styled.span`
  position: absolute;
  right: -12px;
  top: -12px;
  display: inline-block;
  font-size: 0.75em;
  font-weight: 400;
  border-radius: 100%;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  padding: 0 0.0625em;
  color: ${colors.creme};
  background: ${colors.salmaoEscuro};
`

/* SHIPPING */

export const ShippingData = styled.div`
  width: auto;
  padding: 1em;
  border-radius: 0.25em;
  border: 1px solid ${colors.cinzaEscuro};
  background-color: ${colors.cinza};

  label {
    display: none;
  }

  input {
    padding: 0.25em;
    height: 2.5em;

    &::placeholder {
      position: relative;
      top: -4px;
    }
  }
`

export const ShippingAndTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 60%;
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
