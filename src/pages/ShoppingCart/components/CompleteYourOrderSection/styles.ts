import styled from 'styled-components'
import { resizableConsts } from '../../../../constraints/resizableConsts'

export const CompleteYourOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & > h2 {
    font-size: 1.125rem;
  }
`

// INICIO DO COMPONENT CardHeader

const ICON_COLOR_PROPS = {
  purple: 'purple-500',
  yellow: 'yellow-700',
} as const

interface CardHeaderProps {
  iconColor: keyof typeof ICON_COLOR_PROPS
}
export const CardHeader = styled.header<CardHeaderProps>`
  display: flex;
  gap: 0.5rem;

  & > :not(div) {
    color: ${(props) => props.theme[ICON_COLOR_PROPS[props.iconColor]]};
  }

  div {
    display: flex;
    flex-direction: column;
    line-height: 1.3;
    gap: 0.125rem;

    span {
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      color: ${(props) => props.theme['base-text']};
      font-size: 0.875rem;
    }
  }
`

// FIM DO COMPONENT CardHeader

export const InputGroupContainer = styled.div`
  input {
    ::placeholder {
      color: ${(props) => props.theme['base-label']};
      font-size: 0.875rem;
    }
  }

  display: grid;
  grid-template-areas:
    'cepContainer empty empty'
    'ruaContainer ruaContainer ruaContainer'
    'numeroContainer complementoContainer complementoContainer'
    'bairroContainer cidadeContainer UFContainer';

  grid-template-columns: 25% 1fr 15%;

  row-gap: 16px;
  gap: 0.75rem;

  .UF {
    grid-area: UFContainer;
  }

  .CEP {
    grid-area: cepContainer;
  }

  .Rua {
    grid-area: ruaContainer;
  }

  .Numero {
    grid-area: numeroContainer;
  }

  .Bairro {
    grid-area: bairroContainer;
  }

  .Cidade {
    grid-area: cidadeContainer;
  }

  & > div {
    grid-area: complementoContainer;
  }
`

interface InputTextProps {
  upperCaseOnly?: boolean
}

export const InputText = styled.input<InputTextProps>`
  text-transform: ${(props) =>
    props.upperCaseOnly !== null && props.upperCaseOnly
      ? 'uppercase'
      : 'inherit'};

  padding: 0.75rem;
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  line-height: 1.3;

  &:not(:disabled):hover,
  :focus {
    border-color: ${(props) => props.theme['yellow-700']};
  }

  &[type='number'] {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    & {
      -moz-appearance: textfield;
    }
  }
`

export const InputComplementGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  &:has(input[type='text']:not(:disabled)):hover,
  &:has(input[type='text']:focus) {
    border-color: ${(props) => props.theme['yellow-700']};
  }

  input[type='text'] {
    border: none;
    background: transparent !important;
    width: 100%;
    line-height: 1.3;

    padding-left: 0.75rem;
  }

  button {
    border: none;
    background: transparent !important;

    font-style: italic;
    color: ${(props) => props.theme['base-label']};
    font-size: 0.75rem;
    padding: 0.75rem;
  }
`

export const PayWayMethods = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (${resizableConsts['min-width-break-grid-coffee-2']}) {
    flex-direction: column;
  }

  button {
    display: flex;
    align-items: flex-start;
    min-width: 179px;
    gap: 0.75rem;
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid transparent;
    font-size: 0.75rem;
    cursor: default;

    background: ${(props) => props.theme['base-button']};

    & :not(span) {
      color: ${(props) => props.theme['purple-500']};
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['base-hover']};
      color: ${(props) => props.theme['base-subtitle']};
      cursor: pointer;
    }

    &.selected {
      background-color: ${(props) => props.theme['purple-200']};
      border-color: ${(props) => props.theme['purple-500']};
    }

    line-height: 1.6;
  }
`
