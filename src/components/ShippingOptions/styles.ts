import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 1em;
  padding: 1.25em 0;
`

export const Card = styled.div`
  border: 0.0625em solid #ddd;
  border-radius: 0.5em;
  padding: 1em 0;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0.125em 0.25em rgba(0, 0, 0, 0.1);
  width: 12em;

  img {
    max-width: 4em;
    height: auto;
    margin: 0 auto 1em;
  }

  p {
    font-size: 0.8em;
  }
`
