import { CoffeeInterface } from '../../data/coffeeData'
import { AdressDeliveryFormType } from '../../pages/ShoppingCart'

export enum ActionsReducerEnum {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  PLUS_OR_MINUS_COFFEE_AMOUNT_ON_CART = 'PLUS_OR_MINUS_COFFEE_AMOUNT_ON_CART',
  REMOVE_COFFEE_ON_CART = 'REMOVE_COFFEE_ON_CART',
  SUBMIT_FORM_ON_CART = 'SUBMIT_FORM_ON_CART',
}

export function actionAddCoffeeToCartPattern(coffeeData: CoffeeInterface) {
  return {
    type: ActionsReducerEnum.ADD_COFFEE_TO_CART,
    payload: { coffeeData },
  }
}

export function actionPlusOrMinusCoffeeAmountOnCartPattern(
  coffeeData: CoffeeInterface,
  action: 'plus' | 'minus',
) {
  return {
    type: ActionsReducerEnum.PLUS_OR_MINUS_COFFEE_AMOUNT_ON_CART,
    payload: { coffeeData, action },
  }
}

export function actionRemoveCoffeeOnCartPattern(coffeeData: CoffeeInterface) {
  return {
    type: ActionsReducerEnum.REMOVE_COFFEE_ON_CART,
    payload: { coffeeData },
  }
}

export function actionSubmitFormOnCartPattern(
  formValue: AdressDeliveryFormType,
) {
  return {
    type: ActionsReducerEnum.SUBMIT_FORM_ON_CART,
    payload: { formValue },
  }
}
