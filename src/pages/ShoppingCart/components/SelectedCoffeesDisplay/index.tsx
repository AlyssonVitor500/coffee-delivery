import { AmountCoffeeField } from '../../../../components/AmountCoffeeField'
import { CoffeeInterface } from '../../../../data/coffeeData'
import {
  CoffeeInfo,
  CoffeeInputGroup,
  CoffeInfoText,
  SelectedCoffeesDisplayContainer,
  TrashButton,
} from './styles'
import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

export function SelectedCoffeesDisplay(coffeeData: CoffeeInterface) {
  const { handlePlusOrMinusCoffeeAmountOnCart, handleRemoveCoffeeOnCart } =
    useContext(CoffeeContext)

  return (
    <SelectedCoffeesDisplayContainer className="coffeesDisplayContainer">
      <CoffeeInfo>
        <img src={coffeeData.coffeSVG} width={64} alt="" />

        <CoffeInfoText>
          {coffeeData.name}
          <CoffeeInputGroup>
            <AmountCoffeeField
              onChange={(action) => {
                handlePlusOrMinusCoffeeAmountOnCart(coffeeData, action)
              }}
              value={coffeeData.coffeeAmount}
              isSelectedCoffeesSection
            />
            <TrashButton
              onClick={() => {
                handleRemoveCoffeeOnCart(coffeeData)
              }}
            >
              <Trash size={16} />
              <span>REMOVER</span>
            </TrashButton>
          </CoffeeInputGroup>
        </CoffeInfoText>
      </CoffeeInfo>
      <b>
        R$
        {String(coffeeData.coffeePrice * coffeeData.coffeeAmount).replace(
          '.',
          ',',
        )}
      </b>
    </SelectedCoffeesDisplayContainer>
  )
}
