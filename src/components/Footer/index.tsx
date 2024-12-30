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
        headerIsShort={false}
        src={
          'https://scontent.fsdu38-1.fna.fbcdn.net/v/t1.6435-9/193505118_1427263510942311_2923371183308691794_n.png?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=TKIXs6nFDzkQ7kNvgHwk0Sh&_nc_zt=23&_nc_ht=scontent.fsdu38-1.fna&_nc_gid=AKxcccDnjCPsyrSqiBGC4fT&oh=00_AYCj7qhYvapH23t8W6iTJiLLtXWXutxwzqBuTfWPGaaG8Q&oe=67844DD5'
        }
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
