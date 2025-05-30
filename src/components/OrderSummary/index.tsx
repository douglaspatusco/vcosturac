import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { formattedPrice } from '@/services/utility'
import { calculateTotalPrice } from '@/utils/cartUtils'

import { RootState } from '@/store'
import { setTotal } from '@/store/reducers/cartSlice'

import { Total } from './styles'

const OrderSummary = () => {
  const dispatch = useDispatch()
  const selectedFreight = useSelector(
    (state: RootState) => state.shipping.selectedFreight
  )
  const { cartItems } = useSelector((state: RootState) => state.cart)
  const cartTotalPrice = useMemo(
    () => calculateTotalPrice(cartItems),
    [cartItems]
  )
  const total = useMemo(() => {
    const freightPrice = Number(selectedFreight?.price) || 0
    return (cartTotalPrice + freightPrice).toFixed(2)
  }, [cartTotalPrice, selectedFreight])

  useEffect(() => {
    dispatch(setTotal(Number(total)))
  }, [dispatch, total])

  return (
    <Total>
      <div>
        <h4>Subtotal:</h4>
        <h4>{formattedPrice(calculateTotalPrice(cartItems))}</h4>
      </div>
      <div>
        <h4>Frete:</h4>
        <h4>{formattedPrice(Number(selectedFreight?.price) || 0)}</h4>
      </div>
      <div>
        <h2>Total:</h2>
        <h2>{formattedPrice(Number(total))}</h2>
      </div>
    </Total>
  )
}

export default OrderSummary
