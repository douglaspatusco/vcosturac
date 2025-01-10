import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 1em;
  padding: 1.25em 0;
`

export const Option = styled.label<{ selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 2px solid ${({ selected }) => (selected ? 'green' : 'gray')};
  background-color: ${({ selected }) => (selected ? '#d4f5d4' : 'white')};
  border-radius: 5px;
  cursor: pointer;
`

export const Card = styled.div<{ selected: boolean }>`
  text-align: center;
  width: 12em;
  padding: 1em 0;
  background-color: ${({ selected }) => (selected ? '#d4f5d4' : '#ffffff')};
  border: 0.0625em solid ${({ selected }) => (selected ? 'green' : 'gray')};
  border-radius: 0.5em;
  box-shadow: 0 0.125em 0.25em rgba(0, 0, 0, 0.1);
  cursor: pointer;

  img {
    max-width: 4em;
    height: auto;
    margin: 0 auto 1em;
  }

  p {
    font-size: 0.8em;
  }
`
