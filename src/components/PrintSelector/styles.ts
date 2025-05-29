import { colors } from '@/styles/GlobalStyles'
import styled from 'styled-components'
import Image from 'next/image'

export const Prints = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  p {
    font-size: 0.8em;
  }
`

export const PrintsList = styled.div`
  display: flex;
  gap: 1em;

  img {
    width: 3em;
    height: 3em;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      box-shadow:
        0 0.0625em 0.125em 0 rgba(0, 0, 0, 0.3),
        0 0.125em 0.375em 0.125em rgba(0, 0, 0, 0.15);
      transition: 0.3s ease;
    }

    &:active {
      transform: scale(0.9);
      transition: 0.3s ease;
    }
  }
`

export const SelectedImage = styled(Image)`
  outline: 0.25em solid ${colors.mostarda};
`
