import { CoffeeInterface } from '../../data/coffeeData'
import { ActionsReducerEnum } from './action'

import { produce } from 'immer'
import {
  AdressDeliveryFormType,
  EnumPayMethodChooses,
} from '../../pages/ShoppingCart'

export interface AdressDataInterface extends AdressDeliveryFormType {
  paymethodType: EnumPayMethodChooses
}

export interface CoffeeReducerState {
  selectedCoffees: CoffeeInterface[]
  adressDeliveryData: AdressDataInterface
}

export function coffeesReducer(state: CoffeeReducerState, action: any) {
  switch (action.type) {
    case ActionsReducerEnum.ADD_COFFEE_TO_CART: {
      const coffee = action.payload.coffeeData

      const index = state.selectedCoffees.findIndex(
        (coffeeItem) => coffeeItem.name === coffee.name,
      )

      if (index < 0) {
        return produce(state, (draft) => {
          draft.selectedCoffees.push(coffee)
        })
      } else {
        return produce(state, (draft) => {
          draft.selectedCoffees[index].coffeeAmount =
            draft.selectedCoffees[index].coffeeAmount + coffee.coffeeAmount
        })
      }
    }

    case ActionsReducerEnum.PLUS_OR_MINUS_COFFEE_AMOUNT_ON_CART: {
      const index = state.selectedCoffees.findIndex(
        (coffee) => coffee.name === action.payload.coffeeData.name,
      )

      if (index !== -1) {
        return produce(state, (draft) => {
          if (action.payload.action === 'plus') {
            draft.selectedCoffees[index].coffeeAmount =
              draft.selectedCoffees[index].coffeeAmount + 1
          } else if (action.payload.action === 'minus') {
            draft.selectedCoffees[index].coffeeAmount =
              draft.selectedCoffees[index].coffeeAmount - 1
          }
        })
      }

      return state
    }

    case ActionsReducerEnum.REMOVE_COFFEE_ON_CART: {
      const index = state.selectedCoffees.findIndex(
        (coffee) => coffee.name === action.payload.coffeeData.name,
      )

      return produce(state, (draft) => {
        draft.selectedCoffees.splice(index, 1)
      })
    }

    case ActionsReducerEnum.SUBMIT_FORM_ON_CART: {
      return produce(state, (draft) => {
        draft.selectedCoffees = []
        draft.adressDeliveryData = action.payload.formValue
      })
    }

    default:
      return state
  }
}
