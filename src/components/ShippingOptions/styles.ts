import { colors } from '@/styles/GlobalStyles'
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
  border: 2px solid
    ${({ selected }) =>
      selected ? `${colors.marromEscuroPlus}` : `${colors.cinza}`};
  background-color: ${({ selected }) =>
    selected ? `${colors.cinza}` : `${colors.branco}`};
  border-radius: 5px;
  cursor: pointer;

  input[type='checkbox'] {
    display: none;
  }
`

export const CustomCheckbox = styled.span<{ selected: boolean }>`
  width: 20px;
  height: 18px;
  border: 2px solid ${colors.marromEscuroPlus};
  background-color: ${(props) =>
    props.selected ? `${colors.salmao}` : `${colors.branco}`};
  display: inline-block;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  background-image: ${(props) =>
    props.selected
      ? "url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22 fill=%22%23FFD700%22%3E%3Cpath d=%22M6.173 12.4l-3.92-3.92.707-.707L6.88 11.2l7.84-7.84.707.707z%22/%3E%3C/svg%3E')"
      : 'none'};
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 8px;
  cursor: pointer;
`

export const Card = styled.div<{ selected: boolean }>`
  text-align: start;
  width: 100%;
  padding: 1em 0;
  background-color: ${({ selected }) =>
    selected ? `${colors.cinza}` : `${colors.branco}`};
  color: ${({ selected }) =>
    selected ? `${colors.preto}` : `${colors.preto}`};
  border-radius: 0.5em;
  cursor: pointer;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img {
      height: 1em;
      width: auto;
    }
  }

  p {
    font-size: 0.8em;
  }
`
