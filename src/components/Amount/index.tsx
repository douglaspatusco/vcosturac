import { AmountField } from './styles'

interface AmountProps {
  quantity: number
  onIncrement: () => void
  onDecrement: () => void
  onQuantityChange?: (value: number) => void
  isCheckout?: boolean
}

const Amount = (props: AmountProps) => {
  const {
    quantity,
    onDecrement,
    onIncrement,
    onQuantityChange,
    isCheckout = false,
  } = props

  return (
    <AmountField $isCheckout={isCheckout}>
      <span
        onClick={onDecrement}
        title="Remover um item"
        aria-label="Remover um item"
      >
        -
      </span>
      <input
        type="number"
        value={quantity}
        min={1}
        step={1}
        onChange={(e) => onQuantityChange?.(Number(e.target.value))}
      />
      <span
        onClick={onIncrement}
        title="Adicionar um item"
        aria-label="Adicionar um item"
      >
        +
      </span>
    </AmountField>
  )
}

export default Amount
