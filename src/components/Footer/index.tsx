'use client'

import { LogoContainer } from '../Header/styles'
import SocialMedias from '../SocialMedias'
import { FooterContainer } from './styles'

const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer />
      <SocialMedias />
      <p>
        Copyright &copy;2024 - Todos os Direitos Reservados à Vânia Costura
        Criativa
      </p>
    </FooterContainer>
  )
}

export default Footer
