import Image from "next/image"

import instagram from "../../public/images/instagram-logo.svg"
import facebook from "../../public/images/facebook-logo.svg"
import whatsapp from "../../public/images/whatsapp-logo.svg"
import { List } from "./styles"

const SocialMedias = () => {
  return (
    <List>
      <li>
        <a href="https://instagram.com/vaniafcostura" target="_blank">
          <Image src={instagram} alt="Instagram" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/VaniaFCostura" target="_blank">
          <Image src={facebook} alt="Facebook" />
        </a>
      </li>
      <li>
        <a href="https://wa.me/5521968334606?text=Olá,!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos." target="_blank">
          <Image src={whatsapp} alt="WhatsApp" />
        </a>
      </li>
    </List>
  )
}

export default SocialMedias
