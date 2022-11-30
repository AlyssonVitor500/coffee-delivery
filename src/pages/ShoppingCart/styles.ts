import styled from 'styled-components'
import { resizableConsts } from '../../constraints/resizableConsts'

export const ShoppingCartContainer = styled.main`
  padding: 2.5rem 10rem; // padding for container

  display: flex;
  gap: 2rem;

  @media (${resizableConsts['min-width-break-loadout']}) {
    padding: 2.5rem 2rem; // padding for container
  }

  @media (${resizableConsts['min-width-break-cart-loadout']}) {
    flex-direction: column;
  }
`
