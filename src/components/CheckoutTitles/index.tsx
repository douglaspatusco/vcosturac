import { ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import { ShippingTitle } from './styles'

interface CheckoutTitleProps {
  icon: IconProp
  children: ReactNode
}

const CheckoutTitle = ({ icon, children }: CheckoutTitleProps) => (
  <ShippingTitle className={'personal-data'}>
    <FontAwesomeIcon icon={icon} />
    <h1>{children}</h1>
  </ShippingTitle>
)

export default CheckoutTitle
