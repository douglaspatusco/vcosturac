import Link from 'next/link'
import { colors } from '@/styles/GlobalStyles'
import { styled } from 'styled-components'

// index.tsx

export const Categories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 2em;

  ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: -4em;
  }

  li {
    margin: 4em 0;
    list-style: none;
    font-size: 1.5em;
  }
`

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  padding: 1em;
  margin: 1em;
  border: 0.0625em solid gray;
  border-radius: 0.25em;
  background-color: ${colors.creme};
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`

export const Imagem = styled.img`
  width: 12.5em;
  mix-blend-mode: darken;
  transition: 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`

// [categoria].tsx

export const ContainerProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProductsList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1em;
  padding: 2em;
`

export const ListItem = styled.li`
  padding: 1em;
  border: 1px solid gray;
  border-radius: 0.5em;
  transition: 0.3s ease;
  background-color: ${colors.creme};

  &:hover {
    transform: scale(1.02);
  }
`

export const Thumb = styled.img`
  width: 200px;
  height: 200px;
  transition: 0.3s ease;
  mix-blend-mode: darken;

  ${ListItem}:hover & {
    transform: scale(1.05);
  }
`

export const ItemLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  h3 {
    padding-bottom: 0.25em;
  }
`
