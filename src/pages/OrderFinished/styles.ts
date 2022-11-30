import styled from 'styled-components'
import { resizableConsts } from '../../constraints/resizableConsts'

export const OrderFinishedContainer = styled.main`
  display: flex;
  gap: 6.375rem;
  align-items: center;

  padding: 5rem 10rem; // padding for container

  & > img {
    align-self: flex-end;
  }

  @media (${resizableConsts['min-width-break-loadout']}) {
    padding: 2.5rem 2rem; // padding for container
  }

  @media (${resizableConsts['min-width-break-grid-coffee-3']}) {
    flex-direction: column;

    & > img {
      align-self: initial;
    }
  }
`

export const MainInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .text * {
    line-height: 1.3;
  }

  .text h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    font-size: 2rem;

    color: ${(props) => props.theme['yellow-700']};
  }

  .text span {
    font-size: 1.25rem;
  }
`

export const DeliveryInformationContaiener = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme.background};
  border: 1px solid transparent;
  box-sizing: border-box;
  border-radius: 6px 32px;
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
    margin: -2px;
    border-radius: inherit;

    background: linear-gradient(
      to right,
      ${(props) => props.theme['yellow-500']},
      ${(props) => props.theme['purple-500']}
    );
  }

  & > div {
    min-width: 446px;

    @media (${resizableConsts['min-width-break-grid-coffee-1']}) {
      min-width: initial;
    }
  }
`
