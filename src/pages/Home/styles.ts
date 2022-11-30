import styled from 'styled-components'
import backgroundSvg from '../../assets/background.svg'
import { resizableConsts } from '../../constraints/resizableConsts'

export const HomeHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 476px;
  gap: 3.5rem;
  padding: 5.75rem 10rem; // padding for container

  align-items: flex-start;

  background-image: url(${backgroundSvg});
  background-position: center;
  box-shadow: 0 0 0.5rem 0.5rem ${(props) => props.theme.background} inset;

  @media (${resizableConsts['min-width-break-loadout']}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5.75rem 2rem;
    box-shadow: 0.5rem 0 0.5rem 0.5rem ${(props) => props.theme.background}
      inset;
    width: 100%;
    overflow: hidden;

    aside img {
      width: 390px;
    }
  }
`

export const HomeTextContainer = styled.div`
  line-height: 1.3;

  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    margin-top: 1rem;
  }
`

export const WhyBuyWithUsContainer = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;

  @media (${resizableConsts['min-width-break-loadout']}) {
    place-items: center;
  }

  @media (${resizableConsts['min-width-break-grid-coffee-1']}) {
    grid-template-columns: 1fr;
    place-items: start;
  }
`

export const MenuContainer = styled.div`
  padding: 0 10rem; // padding for container
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  & > h2 {
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (${resizableConsts['min-width-break-loadout']}) {
    padding: 0rem 2rem;
  }
`
export const CoffeeListComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;

  @media (${resizableConsts['min-width-break-grid-coffee-3']}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (${resizableConsts['min-width-break-grid-coffee-2']}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (${resizableConsts['min-width-break-grid-coffee-1']}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
