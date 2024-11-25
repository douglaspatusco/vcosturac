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
    5px 0 10px rgba(0, 0, 0, 0.2),
    -5px 0 10px rgba(0, 0, 0, 0.2);
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

export const ZoomContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 40em;
  height: 40em;
`

export const ZoomedImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`

export const ThumbnailsContainer = styled.div`
  display: flex;
  gap: 1em;
`

export const Thumbnail = styled.img`
  width: 5em;
  height: 5em;
  cursor: pointer;

  &:hover {
    box-shadow:
      0 1px 2px 0 rgba(0, 0, 0, 0.3),
      0 2px 6px 2px rgba(0, 0, 0, 0.15);
    transition: 0.3s ease;
    transform: scale(1.05);
  }
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 100%;
  padding: 1em 0;
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

export const Prints = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  p {
    font-size: 0.8em;
  }

  div {
    display: flex;
    gap: 1em;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;

      &:hover {
        box-shadow:
          0 1px 2px 0 rgba(0, 0, 0, 0.3),
          0 2px 6px 2px rgba(0, 0, 0, 0.15);
        transition: 0.3s ease;
        transform: scale(1.05);
      }
    }
  }
`

export const ContainerBuy = styled.div`
  display: flex;
  gap: 2em;
`

export const Amount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #b4b4b4;
  border-radius: 0.25em;

  span {
    padding: 0 0.5em 0 0.5em;
    font-size: 2em;
    cursor: pointer;
    user-select: none;

    &:active {
      transform: scale(1.05);
    }
  }

  &:focus-visible {
    outline: none;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    width: 50px;
    height: 20px;
    font-size: 1em;
    text-align: center;
    border: none;
    outline: none;
    appearance: textfield;
  }
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
      0 1px 2px 0 rgba(0, 0, 0, 0.3),
      0 2px 6px 2px rgba(0, 0, 0, 0.15);
  }

  &:active {
    background-color: ${colors.salmaoClaro};
  }
`

export const Description = styled.div``

// https://cdn.awsli.com.br/2500x2500/1275/1275983/produto/50157355/15e033c992.jpg
