import Link from 'next/link'
import { colors } from '@/styles/GlobalStyles'
import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.preto};
  opacity: 0.7;
`

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease-in-out,
    visibility 0s 0.3s;

  &.is-open {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s ease-in-out;
  }
`

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 100%;
  height: 100%;

  div:last-child {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin: auto 0 1em 0;
  }
`

export const Sidebar = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 0;
  top: 0;
  max-width: 440px;
  width: 100%;
  height: 100%;
  padding: 2.5em 1em 0 1em;
  background-color: ${colors.marrom};
  z-index: 2;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;

  &.is-open {
    transform: translateX(0);
  }
`

export const ProductsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 6em;
  overflow-y: auto;
  overflow-x: hidden;
`

export const ProductItem = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1em;
  padding: 0.5em 2em 0.5em 0.5em;
  border-radius: 0.25em;
  height: 8em;
  position: relative;
  background-color: ${colors.marromClaro};
  color: ${colors.creme};

  img {
    /* width: 4em; */
    /* height: 4em; */
    margin: 0 0.5em;
    mix-blend-mode: darken;
  }
`

export const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  min-width: 10em;
`

export const DeleteItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0.25em;
  top: 0.25em;
  width: 1.5em;
  height: 1.5em;
  border: none;
  font-size: 1em;
  background-color: ${colors.marromClaro};
  color: ${colors.creme};
  cursor: pointer;

  &:hover {
    background-color: ${colors.marromEscuro};
    border-radius: 0.25em;
  }

  svg {
    width: 1em;
    height: 1em;
  }
`

export const TotalPrice = styled.div`
  color: ${colors.creme};

  p {
    font-size: 0.8em;
    font-weight: 700;
  }
`

export const Checkout = styled(Link)`
  align-content: center;
  text-align: center;
  height: 3em;
  color: ${colors.creme};
  background-color: ${colors.marromEscuro};
  border: none;
  border-radius: 0.25em;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: ${colors.marromEscuroPlus};
  }
`

export const EmptyCart = styled.p`
  text-align: center;
  padding-top: 8em;
  font-size: 1em;
  line-height: 1.5em;
  color: ${colors.creme};
`
