import { Minus, Plus } from 'phosphor-react'
import { CoffeeAmountContainerInput } from './styles'

interface AmountCoffeeFieldProps {
  value: number
  isSelectedCoffeesSection?: boolean
  onChange: (action: 'plus' | 'minus') => void
}

export function AmountCoffeeField({
  value,
  onChange,
  isSelectedCoffeesSection = false,
}: AmountCoffeeFieldProps) {
  function handleChangeCoffeeAmount(action: 'plus' | 'minus') {
    if (!(action === 'minus' && value === 1)) onChange(action)
  }

  return (
    <CoffeeAmountContainerInput
      isSelectedCoffeesSection={isSelectedCoffeesSection}
    >
      <Minus
        weight="fill"
        size={14}
        onClick={() => {
          handleChangeCoffeeAmount('minus')
        }}
        className="minus"
      />

      <span>{value}</span>

      <Plus
        weight="fill"
        size={14}
        onClick={() => {
          handleChangeCoffeeAmount('plus')
        }}
        className="plus"
      />
    </CoffeeAmountContainerInput>
  )
}
