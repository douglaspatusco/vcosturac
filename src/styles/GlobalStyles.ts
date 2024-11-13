import { createGlobalStyle } from "styled-components";

export const colors = {
  creme: '#f7f9ec',
  mostarda: '#e2b42d',
  salmaoClaro: '#c9816e',
  salmao: '#c5654c',
  salmaoEscuro: '#914c36',
  marrom: '#b57d64',
  azul: '#bdc5de',
  cinza: '#f9f9f9',
  preto: '#000000'
}

export const breakpoints = {

}

const GlobalStyle = createGlobalStyle`
  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`
export default GlobalStyle
