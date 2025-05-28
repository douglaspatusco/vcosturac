import { colors } from '@/styles/GlobalStyles'
import { styled } from 'styled-components'
import Image from 'next/image'

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
