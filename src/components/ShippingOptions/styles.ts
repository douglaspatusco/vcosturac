import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  text-align: flex-start;
  width: 12em;
  padding: 1em 0;
  background-color: ${({ selected }) => (selected ? '#d4f5d4' : '#ffffff')};
  border-radius: 0.5em;
  cursor: pointer;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  p {
    font-size: 0.8em;
  }
`
