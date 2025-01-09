interface ShippingOption {
  name: string
  price: string
  delivery_time: string
  company: {
    picture: string
  }
}

interface ShippingOptionsProps {
  options: ShippingOption[]
}
