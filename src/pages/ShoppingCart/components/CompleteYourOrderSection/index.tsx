import {
  CompleteYourOrderContainer,
  InputComplementGroup,
  InputGroupContainer,
  InputText,
  PayWayMethods,
  CardHeader,
} from './styles'

import {
  CurrencyDollar,
  Money,
  Bank,
  CreditCard,
  MapPinLine,
} from 'phosphor-react'
import { useContext } from 'react'
import { DefaultCardComponent } from '../../../../components/DefaultCardComponent'
import { useFormContext } from 'react-hook-form'
import { EnumPayMethodChooses } from '../..'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

interface CompleteYourOrderSectionProps {
  selectedPayMethod: string
  setSelectedPayMethod: (method: EnumPayMethodChooses) => void
}
export function CompleteYourOrderSection({
  selectedPayMethod,
  setSelectedPayMethod,
}: CompleteYourOrderSectionProps) {
  const { register } = useFormContext()
  const { selectedCoffees } = useContext(CoffeeContext)

  const checkIfExistsOrder = selectedCoffees.length > 0

  function handleChoosePayMethod(method: EnumPayMethodChooses) {
    setSelectedPayMethod(method)
  }

  return (
    <CompleteYourOrderContainer>
      <h2>Complete seu pedido</h2>

      <DefaultCardComponent>
        <CardHeader iconColor="yellow">
          <MapPinLine size={18} />
          <div>
            <span>Endereço de Entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </CardHeader>
        <InputGroupContainer>
          <InputText
            placeholder="CEP"
            className="CEP"
            {...register('cep')}
            disabled={!checkIfExistsOrder}
          />
          <InputText
            placeholder="Rua"
            className="Rua"
            {...register('street')}
            disabled={!checkIfExistsOrder}
          />
          <InputText
            placeholder="Número"
            className="Numero"
            type="number"
            {...register('number', { valueAsNumber: true })}
            disabled={!checkIfExistsOrder}
          />
          <InputText
            placeholder="Bairro"
            className="Bairro"
            {...register('district')}
            disabled={!checkIfExistsOrder}
          />
          <InputText
            placeholder="Cidade"
            className="Cidade"
            {...register('city')}
            disabled={!checkIfExistsOrder}
          />
          <InputComplementGroup>
            <input
              type="text"
              placeholder="Complemento"
              {...register('complement')}
              disabled={!checkIfExistsOrder}
            />
            <button type="button">Opcional</button>
          </InputComplementGroup>
          <InputText
            placeholder="UF"
            className="UF"
            {...register('uf')}
            upperCaseOnly
            minLength={2}
            maxLength={2}
            disabled={!checkIfExistsOrder}
          />
        </InputGroupContainer>
      </DefaultCardComponent>

      <DefaultCardComponent>
        <CardHeader iconColor="purple">
          <CurrencyDollar size={18} />
          <div>
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </CardHeader>

        <PayWayMethods>
          <button
            type="button"
            onClick={() => {
              handleChoosePayMethod(EnumPayMethodChooses.CREDIT)
            }}
            disabled={!checkIfExistsOrder}
            className={
              selectedPayMethod === EnumPayMethodChooses.CREDIT
                ? 'selected'
                : ''
            }
          >
            <CreditCard size={16} /> <span>CARTÃO DE CRÉDITO</span>
          </button>

          <button
            type="button"
            onClick={() => {
              handleChoosePayMethod(EnumPayMethodChooses.DEBIT)
            }}
            disabled={!checkIfExistsOrder}
            className={
              selectedPayMethod === EnumPayMethodChooses.DEBIT ? 'selected' : ''
            }
          >
            <Bank size={16} /> <span>CARTÃO DE DÉBITO</span>
          </button>

          <button
            type="button"
            onClick={() => {
              handleChoosePayMethod(EnumPayMethodChooses.MONEY)
            }}
            disabled={!checkIfExistsOrder}
            className={
              selectedPayMethod === EnumPayMethodChooses.MONEY ? 'selected' : ''
            }
          >
            <Money size={16} /> <span>DINHEIRO</span>
          </button>
        </PayWayMethods>
      </DefaultCardComponent>
    </CompleteYourOrderContainer>
  )
}
