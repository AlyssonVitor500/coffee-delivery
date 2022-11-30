import { useForm, FormProvider } from 'react-hook-form'
import { CompleteYourOrderSection } from './components/CompleteYourOrderSection'
import { SelectedCoffeesSection } from './components/SelectedCoffeesSection'
import { ShoppingCartContainer } from './styles'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { useNavigate } from 'react-router-dom'

const AdressDeliveryFormZod = zod.object({
  cep: zod.string().regex(/^[0-9]{8}$/),
  street: zod.string().min(2),
  number: zod.number(),
  complement: zod.string().optional(),
  district: zod.string().min(2),
  city: zod.string(),
  uf: zod.string().min(2).max(2),
})

export enum EnumPayMethodChooses {
  DEBIT = 'CARTÃO DE CRÉDITO',
  CREDIT = 'CARTÃO DE DÉBITO',
  MONEY = 'DINHEIRO',
}

export type AdressDeliveryFormType = zod.infer<typeof AdressDeliveryFormZod>

export function ShoppingCart() {
  const adressDeliveryForm = useForm<AdressDeliveryFormType>({
    resolver: zodResolver(AdressDeliveryFormZod),
    defaultValues: {
      street: '',
      complement: '',
      district: '',
      cep: '',
      city: '',
      uf: '',
    },
  })

  const { handleSubmitFormOnCart, checkIfExistsOrderInProgress } =
    useContext(CoffeeContext)
  const navigate = useNavigate()

  const [payMethodSelected, setPayMethodSelected] =
    useState<EnumPayMethodChooses>(EnumPayMethodChooses.MONEY)

  const { handleSubmit } = adressDeliveryForm

  function handleFinalizeOrder(formValue: AdressDeliveryFormType) {
    handleSubmitFormOnCart(formValue, payMethodSelected)
    navigate('/order-finished')
  }

  useEffect(() => {
    if (checkIfExistsOrderInProgress()) {
      navigate('/order-finished')
    }
  }, [])

  return (
    <form onSubmit={handleSubmit((form) => handleFinalizeOrder(form))}>
      <FormProvider {...adressDeliveryForm}>
        <ShoppingCartContainer>
          <CompleteYourOrderSection
            selectedPayMethod={payMethodSelected}
            setSelectedPayMethod={setPayMethodSelected}
          />
          <SelectedCoffeesSection />
        </ShoppingCartContainer>
      </FormProvider>
    </form>
  )
}
