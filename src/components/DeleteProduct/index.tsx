import React from 'react'
import { DeleteItem } from './styles'

interface DeleteProductProps {
  onClick: () => void
  $isCheckout: boolean
}

const DeleteProduct: React.FC<DeleteProductProps> = ({
  onClick,
  $isCheckout,
}) => {
  return (
    <DeleteItem onClick={onClick} type="button" $isCheckout={$isCheckout}>
      <svg
        width={100}
        height={100}
        viewBox="0 0 36 36"
        version="1.1"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path d="M27.14,34H8.86A2.93,2.93,0,0,1,6,31V11.23H8V31a.93.93,0,0,0,.86,1H27.14A.93.93,0,0,0,28,31V11.23h2V31A2.93,2.93,0,0,1,27.14,34Z"></path>
        <path d="M30.78,9H5A1,1,0,0,1,5,7H30.78a1,1,0,0,1,0,2Z"></path>
        <rect x="21" y="13" width="2" height="15"></rect>
        <rect x="13" y="13" width="2" height="15"></rect>
        <path d="M23,5.86H21.1V4H14.9V5.86H13V4a2,2,0,0,1,1.9-2h6.2A2,2,0,0,1,23,4Z"></path>
        <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
      </svg>
    </DeleteItem>
  )
}

export default DeleteProduct
