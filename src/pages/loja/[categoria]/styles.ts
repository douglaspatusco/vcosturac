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
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40em;
  height: 40em;
  position: relative;
  overflow: hidden;
`

export const ZoomedImage = styled.img<{
  isZoomed: boolean
  transformOrigin: string
}>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.1s ease;
  transform: ${({ isZoomed }) => (isZoomed ? 'scale(2)' : 'scale(1)')};
  transform-origin: ${({ transformOrigin }) => transformOrigin};
`

export const ThumbnailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  width: 40em;
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

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`
