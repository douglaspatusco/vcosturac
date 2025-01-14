import { createGlobalStyle } from 'styled-components'

export const colors = {
  creme: '#f7f9ec',
  mostardaClaro: '#e5c564',
  mostarda: '#d3af43',
  salmaoClaro: '#c9816e',
  salmao: '#c5654c',
  salmaoEscuro: '#914c36',
  marromClaro: '#d79577',
  marrom: '#b57d64',
  marromEscuro: '#976954',
  marromEscuroPlus: '#895f4b',
  azul: '#bdc5de',
  cinza: '#e5e5e5',
  cinzaEscuro: '#e4e9c8',
  preto: '#000000',
  branco: '#ffffff',
}

export const cores = {
  mostardaClara: '#F9E2A1',
  mostarda: '#D4A917',
  mostardaEscura: '#A8820C',

  salmaoClara: '#FFC9B5',
  salmao: '#FF8264',
  salmaoEscura: '#C85A43',

  marromClara: '#B08C6E',
  marrom: '#8B5E34',
  marromEscura: '#5E3C21',

  azulClara: '#D4E9F9',
  azul: '#8DBAE4',
  azulEscura: '#567EA5',

  cinzaClara: '#E6E6E6',
  cinza: '#B3B3B3',
  cinzaEscura: '#808080',

  creme: '#F5E4C3',
  preto: '#000000',
  branco: '#FFFFFF',
}

export const breakpoints = {}

const GlobalStyle = createGlobalStyle`
  html,
  body {
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
