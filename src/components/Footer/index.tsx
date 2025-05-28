'use client'

import SocialMedias from '../SocialMedias'
import { Logotipo } from '../Header/styles'
import { FooterContainer } from './styles'

const Footer = () => {
  return (
    <FooterContainer>
      <Logotipo
        width={100}
        height={100}
        alt="Logotipo"
        $headerIsShort={false}
        src={'https://i.imgur.com/byPn7fb.png'}
      />
      <SocialMedias />
      <p>
        Copyright &copy;2025 - Todos os Direitos Reservados à Vânia Costura
        Criativa
      </p>
    </FooterContainer>
  )
}

export default Footer
