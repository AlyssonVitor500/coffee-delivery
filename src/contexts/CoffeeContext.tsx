import { createContext, ReactNode, useReducer } from 'react'
import { CoffeeInterface } from '../data/coffeeData'
import {
  AdressDeliveryFormType,
  EnumPayMethodChooses,
} from '../pages/ShoppingCart'
import {
  actionAddCoffeeToCartPattern,
  actionPlusOrMinusCoffeeAmountOnCartPattern,
  actionRemoveCoffeeOnCartPattern,
  actionSubmitFormOnCartPattern,
} from '../reducers/coffees/action'
import {
  AdressDataInterface,
  coffeesReducer,
} from '../reducers/coffees/reducer'

interface CoffeeContextType {
  selectedCoffees: CoffeeInterface[]
  adressDeliveryData: AdressDataInterface
  handleAddCoffeeToCart: (coffeeData: CoffeeInterface) => void
  handleRemoveCoffeeOnCart: (coffeeData: CoffeeInterface) => void
  checkIfExistsOrderInProgress: () => boolean
  handleSubmitFormOnCart: (
    formValue: AdressDeliveryFormType,
    paymethod: EnumPayMethodChooses,
  ) => void
  handlePlusOrMinusCoffeeAmountOnCart: (
    coffeeData: CoffeeInterface,
    action: 'plus' | 'minus',
  ) => void
}
export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeesContextProviderProps {
  children: ReactNode
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [selectedCoffeesReducer, dispatch] = useReducer(coffeesReducer, {
    selectedCoffees: [] as CoffeeInterface[],
    adressDeliveryData: {} as AdressDataInterface,
  })

  function handleAddCoffeeToCart(coffeeData: CoffeeInterface) {
    dispatch(actionAddCoffeeToCartPattern(coffeeData))
  }

  function handleRemoveCoffeeOnCart(coffeeData: CoffeeInterface) {
    dispatch(actionRemoveCoffeeOnCartPattern(coffeeData))
  }

  function handlePlusOrMinusCoffeeAmountOnCart(
    coffeeData: CoffeeInterface,
    action: 'plus' | 'minus',
  ) {
    dispatch(actionPlusOrMinusCoffeeAmountOnCartPattern(coffeeData, action))
  }

  function handleSubmitFormOnCart(
    formValue: AdressDeliveryFormType,
    paymethodType: EnumPayMethodChooses,
  ) {
    const newAdressDeliveryObj = { ...formValue, paymethodType }
    dispatch(actionSubmitFormOnCartPattern(newAdressDeliveryObj))
  }

  function checkIfExistsOrderInProgress(): boolean {
    return selectedCoffeesReducer.adressDeliveryData.cep !== undefined
  }

  const { selectedCoffees, adressDeliveryData } = selectedCoffeesReducer

  return (
    <CoffeeContext.Provider
      value={{
        selectedCoffees,
        handleAddCoffeeToCart,
        adressDeliveryData,
        handlePlusOrMinusCoffeeAmountOnCart,
        handleRemoveCoffeeOnCart,
        handleSubmitFormOnCart,
        checkIfExistsOrderInProgress,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
