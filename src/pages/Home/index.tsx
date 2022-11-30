import {
  CoffeeListComponent,
  HomeHeader,
  HomeTextContainer,
  MenuContainer,
  WhyBuyWithUsContainer,
} from './styles'
import coffeeDeliveryAside from '../../assets/coffee-delivery-aside.svg'
import { RoundedIconButton } from '../../components/RoundedIconButton'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { CoffeeComponent } from '../../components/CoffeeComponent'
import { coffeeDataList } from '../../data/coffeeData'
import { useContext, useEffect } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const { checkIfExistsOrderInProgress } = useContext(CoffeeContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (checkIfExistsOrderInProgress()) {
      navigate('/order-finished')
    }
  }, [])

  return (
    <>
      <HomeHeader>
        <HomeTextContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>

          <WhyBuyWithUsContainer>
            <RoundedIconButton
              color="yellow-700"
              title="Compra simples e segura"
              icon={<ShoppingCart weight="fill" size={16} />}
            ></RoundedIconButton>

            <RoundedIconButton
              color="base-text"
              title="Embalagem mantém o café intacto"
              icon={<Package weight="fill" size={16} />}
            ></RoundedIconButton>

            <RoundedIconButton
              color="yellow-500"
              title="Entrega rápida e rastreada"
              icon={<Timer weight="fill" size={16} />}
            ></RoundedIconButton>

            <RoundedIconButton
              color="purple-500"
              title="O café chega fresquinho até você"
              icon={<Coffee weight="fill" size={16} />}
            ></RoundedIconButton>
          </WhyBuyWithUsContainer>
        </HomeTextContainer>
        <aside>
          <img src={coffeeDeliveryAside} alt="" width={476} />
        </aside>
      </HomeHeader>
      <MenuContainer>
        <h2>Nossos cafés</h2>
        <CoffeeListComponent>
          {coffeeDataList.map((coffee) => {
            return <CoffeeComponent key={coffee.name} {...coffee} />
          })}
        </CoffeeListComponent>
      </MenuContainer>
    </>
  )
}
