import { colors } from '@/styles/GlobalStyles'
import styled from 'styled-components'

export const HeaderContainer = styled.header<{ pageIsScrolled: boolean }>`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: ${(props) => (props.pageIsScrolled ? '80px' : '120px')};
  padding: 1em;
  z-index: 2;
  box-shadow: 0px 3px 10px 0px rgba(88, 88, 88, 0.28);
  background-color: ${colors.mostarda};
  transition: height 0.1s ease;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1440px;
`

export const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  height: auto;
  padding: 1em;

  ul {
    display: flex;
    flex-direction: row;
    gap: 2em;
    width: fit-content;
  }

  li {
    padding: 0.5em;
    color: ${colors.preto};
  }
`

export const Logotipo = styled.img<{ headerIsShort: boolean }>`
  height: ${(props) => (props.headerIsShort ? '4em' : '5em;')};
  width: ${(props) => (props.headerIsShort ? '4em' : '5em;')};
  border-radius: 50%;
  transition: height 0.1s ease;
`

export const Carrinho = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 1em;
  padding: 1em;
  border-radius: 2em;
  color: ${colors.creme};
  background-color: ${colors.salmao};
  cursor: pointer;

  span {
    position: absolute;
    right: 9px;
    top: 8px;
    display: inline-block;
    vertical-align: middle;
    font-size: 9px;
    font-weight: 400;
    border-radius: 100%;
    width: 17px;
    text-align: center;
    height: 17px;
    line-height: 17px;
    padding: 0 1px;
    color: ${colors.creme};
    background: ${colors.salmaoEscuro};
  }

  &:hover {
    box-shadow: 0px 0px 10px 10px rgb(249 249 249 / 25%);
    transition: 0.3s ease;
    transform: scale(1.05);
  }
`
