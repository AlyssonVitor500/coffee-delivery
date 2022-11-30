import styled from 'styled-components'
import { resizableConsts } from '../../constraints/resizableConsts'

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem; // padding for container

  @media (${resizableConsts['min-width-break-loadout']}) {
    padding: 0 2rem;
  }
`
interface HeaderOptionsContainerProps {
  itensAmount: number | undefined
}
export const HeaderOptionsContainer = styled.div<HeaderOptionsContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  .locale-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.25rem;

    border-radius: 8px;
    border: 1px solid transparent;
    background-color: ${(props) => props.theme['purple-200']};
    color: ${(props) => props.theme['purple-700']};

    .icon {
      color: ${(props) => props.theme['purple-500']};
    }
  }

  .cart-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 8px;

    position: relative;

    border: 1px solid transparent;

    background-color: ${(props) => props.theme['yellow-200']};

    cursor: pointer;

    .icon {
      color: ${(props) => props.theme['yellow-700']};
    }
  }
`

export const ItemShopCount = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  color: white;
  font-weight: bold;
  font-size: 0.75rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-700']};
`
