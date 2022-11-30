import styled from 'styled-components'
import { resizableConsts } from '../../constraints/resizableConsts'

export const DefaultLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  padding: 2rem 0; // padding for container
  margin: 0 auto;
  gap: 2.5rem;

  @media (${resizableConsts['min-width-break-loadout']}) {
    /* max-width: none; */
  }
`
