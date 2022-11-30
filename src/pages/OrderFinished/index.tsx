import { MapPin, CurrencyDollar, Timer } from 'phosphor-react'
import { RoundedIconButton } from '../../components/RoundedIconButton'
import {
  DeliveryInformationContaiener,
  MainInformationContainer,
  OrderFinishedContainer,
} from './styles'
import DeliveryOrderSVG from '../../assets/delivery-order.svg'
import { useContext, useEffect } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { useNavigate } from 'react-router-dom'
import { EnumPayMethodChooses } from '../ShoppingCart'

export function OrderFinished() {
  const { adressDeliveryData, checkIfExistsOrderInProgress } =
    useContext(CoffeeContext)
  const navigate = useNavigate()

  function transformPaymethod(paymethod: EnumPayMethodChooses) {
    switch (paymethod) {
      case EnumPayMethodChooses.CREDIT:
        return 'Cartão de Crédito'
      case EnumPayMethodChooses.DEBIT:
        return 'Cartão de Débito'
      case EnumPayMethodChooses.MONEY:
        return 'Dinheiro'
      default:
        return paymethod
    }
  }

  useEffect(() => {
    if (!checkIfExistsOrderInProgress()) {
      navigate('/')
    }
  }, [])

  return (
    <OrderFinishedContainer>
      <MainInformationContainer>
        <div className="text">
          <h2>Uhul! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </div>

        <DeliveryInformationContaiener>
          <RoundedIconButton
            color="purple-500"
            title={
              <>
                Entrega em{' '}
                <b>
                  {adressDeliveryData.street}, {adressDeliveryData.number}{' '}
                  {adressDeliveryData.complement ? (
                    <>({adressDeliveryData.complement})</>
                  ) : (
                    <></>
                  )}
                </b>
              </>
            }
            subtitle={
              <>
                {adressDeliveryData.district} - {adressDeliveryData.city},{' '}
                {adressDeliveryData.uf}
              </>
            }
            icon={<MapPin weight="fill" />}
          />

          <RoundedIconButton
            color="yellow-500"
            title="Previsão de entrega"
            subtitle={<b>20 min - 30 min</b>}
            icon={<Timer weight="fill" />}
          />

          <RoundedIconButton
            color="yellow-700"
            title="Pagamento na entrega"
            subtitle={
              <b>{transformPaymethod(adressDeliveryData.paymethodType)}</b>
            }
            icon={<CurrencyDollar weight="fill" />}
          />
        </DeliveryInformationContaiener>
      </MainInformationContainer>

      <img src={DeliveryOrderSVG} alt="" />
    </OrderFinishedContainer>
  )
}
