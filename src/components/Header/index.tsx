import {
  HeaderContainer,
  HeaderOptionsContainer,
  ItemShopCount,
} from './styles'
import coffeeDeliveryLogo from './../../assets/coffe-delivery-logo.svg'

import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function Header() {
  const { selectedCoffees } = useContext(CoffeeContext)

  const itemsShopCount = selectedCoffees.length

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={coffeeDeliveryLogo} alt="" />
      </NavLink>

      <HeaderOptionsContainer itensAmount={3}>
        <button className="locale-button">
          <MapPin className="icon" weight="fill" size={20} />
          <span>Fortaleza, CE</span>
        </button>
        <NavLink to="/cart">
          <button className="cart-button">
            <ShoppingCart className="icon" weight="fill" size={20} />
            {itemsShopCount !== null && itemsShopCount > 0 && (
              <ItemShopCount>{itemsShopCount}</ItemShopCount>
            )}
          </button>
        </NavLink>
      </HeaderOptionsContainer>
    </HeaderContainer>
  )
}
