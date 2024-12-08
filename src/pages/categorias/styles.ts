import Link from "next/link";
import { colors } from "@/styles/GlobalStyles";
import { styled } from "styled-components";

export const Categories = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
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
  border: 1px solid gray;
  border-radius: 0.5em;
  background-color: ${colors.creme};

  &:hover {
    transition: 0.3s ease;
    transform: scale(1.05);
  }

  img {
    width: 200px;
    mix-blend-mode: darken;

    &:hover {
      transition: 0.3s ease;
      transform: scale(1.2);
    }
  }
`
