import Image from 'next/image'

import { List } from './styles'

const SocialMedias = () => {
  return (
    <List>
      <li>
        <a href="https://instagram.com/vaniafcostura" target="_blank">
          <Image
            width={0}
            height={0}
            src="https://raw.githubusercontent.com/eyelexx/vcosturac/67da96e4c0a4f989dc972e9acebae6722c1214d0/src/public/images/instagram-logo.svg"
            alt="Instagram"
          />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/VaniaFCostura" target="_blank">
          <Image
            width={0}
            height={0}
            src="https://raw.githubusercontent.com/eyelexx/vcosturac/67da96e4c0a4f989dc972e9acebae6722c1214d0/src/public/images/facebook-logo.svg"
            alt="Facebook"
          />
        </a>
      </li>
      <li>
        <a
          href="https://wa.me/5521968334606?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos."
          target="_blank"
        >
          <Image
            width={0}
            height={0}
            src="https://raw.githubusercontent.com/eyelexx/vcosturac/67da96e4c0a4f989dc972e9acebae6722c1214d0/src/public/images/whatsapp-logo.svg"
            alt="WhatsApp"
          />
        </a>
      </li>
    </List>
  )
}

export default SocialMedias
