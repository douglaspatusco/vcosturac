import { colors } from "@/styles/GlobalStyles"
import { styled } from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  a {
    position: relative;
    bottom: 1em;
    margin-bottom: 0.5em;
    font-size: 0.75em;
    text-decoration: underline;
    color: ${colors.salmao};
  }
`

export const Form = styled.div`
  input {
    margin-right: 1em;
  }

  input {
    align-content: center;
    text-align: center;
    height: 2.5em;
    width: 150px;
    padding: 0.5em;
    font-size: 1em;
  }

  button {
    border: 0.0625em solid;
    border-radius: 0.25em;
    padding: 0.55em;
    font-size: 1em;
    color: ${colors.creme};
    background-color: ${colors.salmao};
    cursor: pointer;
  }
`
