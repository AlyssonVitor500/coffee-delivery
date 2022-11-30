import {
  AddCoffeeInCartButton,
  CoffeeAmountContainer,
  CoffeeContainer,
  CoffeeContentContainer,
  LabelContainer,
  PriceCartContainer,
} from './styles'
import { LabelComponent } from '../LabelComponent'
import { useContext, useState } from 'react'

import { ShoppingCart } from 'phosphor-react'
import { CoffeeInterface } from '../../data/coffeeData'
import { AmountCoffeeField } from '../AmountCoffeeField'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function CoffeeComponent(coffeeData: CoffeeInterface) {
  const [coffeeAmountState, setCoffeeAmountState] = useState(1)

  const { handleAddCoffeeToCart } = useContext(CoffeeContext)

  const { name, description, coffeePrice, coffeSVG, labelList } = coffeeData

  function setCoffeeAmount(action: 'plus' | 'minus') {
    if (action === 'plus') {
      setCoffeeAmountState((state) => {
        return state + 1
      })
    }

    if (action === 'minus') {
      setCoffeeAmountState((state) => {
        return state - 1
      })
    }
  }

  function handleAddNewCoffeeToCart() {
    const coffeeToAdd = { ...coffeeData, coffeeAmount: coffeeAmountState }
    handleAddCoffeeToCart(coffeeToAdd)
    setCoffeeAmountState(1)
  }

  return (
    <CoffeeContainer>
      <CoffeeContentContainer>
        <img src={coffeSVG} width={120} alt="" />
        <LabelContainer>
          {labelList.map((labelDescription) => (
            <LabelComponent
              key={labelDescription}
              labelText={labelDescription}
            />
          ))}
        </LabelContainer>
        <h3>{name}</h3>
        <span className="coffee-description">{description}</span>

        <PriceCartContainer>
          <span className="price-formatted">
            R$ <b>{String(coffeePrice).replace('.', ',')}</b>
          </span>
          <CoffeeAmountContainer>
            <AmountCoffeeField
              value={coffeeAmountState}
              onChange={setCoffeeAmount}
            />
            <AddCoffeeInCartButton>
              <ShoppingCart
                weight="fill"
                size={18}
                onClick={handleAddNewCoffeeToCart}
              />
            </AddCoffeeInCartButton>
          </CoffeeAmountContainer>
        </PriceCartContainer>
      </CoffeeContentContainer>
    </CoffeeContainer>
  )
}
