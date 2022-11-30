import styled from 'styled-components'
import { resizableConsts } from '../../constraints/resizableConsts'
import { defaultTheme } from '../../styles/default'

interface RoundedIconButtonContainerProps {
  backgroundItemColor: keyof typeof defaultTheme
}
export const RoundedIconButtonContainer = styled.div<RoundedIconButtonContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;

    border: none;
    border-radius: 100%;

    background-color: ${(props) => props.theme[props.backgroundItemColor]};
    color: ${(props) => props.theme.white};
  }

  &:last-child {
    line-height: 1.3;
  }

  div.textContainer {
    display: flex;
    flex-direction: column;
  }
`
