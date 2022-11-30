import { useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { SelectedCoffeesDisplay } from '../SelectedCoffeesDisplay'
import { NavLink } from 'react-router-dom'
import {
  ConfirmOrderButton,
  SelectedCoffeeCard,
  SelectedCoffeesContainer,
  TotalOrderContainer,
} from './styles'

export function SelectedCoffeesSection() {
  const { selectedCoffees } = useContext(CoffeeContext)
  const orderExists = selectedCoffees.length > 0

  const coffeesTotal = selectedCoffees.reduce((count, obj) => {
    return count + obj.coffeePrice * obj.coffeeAmount
  }, 0)

  const deliveryMoney = 3.5

  return (
    <SelectedCoffeesContainer>
      <h2>Cafés selecionados</h2>
      <SelectedCoffeeCard>
        {orderExists && (
          <>
            {selectedCoffees.map((coffee) => {
              return <SelectedCoffeesDisplay key={coffee.name} {...coffee} />
            })}

            <TotalOrderContainer>
              <div className="priceAmountContainer">
                <label>Total de itens</label>
                <label>
                  R$ {String(coffeesTotal.toFixed(2)).replace('.', ',')}
                </label>
              </div>
              <div className="priceAmountContainer">
                <label>Entrega</label>
                <label>
                  R$ {String(deliveryMoney.toFixed(2)).replace('.', ',')}
                </label>
              </div>
              <div className="priceAmountContainer">
                <label>Total</label>
                <label>
                  R${' '}
                  {String((coffeesTotal + deliveryMoney).toFixed(2)).replace(
                    '.',
                    ',',
                  )}
                </label>
              </div>
            </TotalOrderContainer>
            <ConfirmOrderButton type="submit">
              CONFIRMAR PEDIDO
            </ConfirmOrderButton>
          </>
        )}

        {!orderExists && (
          <span>
            Você ainda não tem um pedido!{' '}
            <NavLink to="/">Por que não fazer agora?</NavLink>
          </span>
        )}
      </SelectedCoffeeCard>
    </SelectedCoffeesContainer>
  )
}
