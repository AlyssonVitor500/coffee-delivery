import styled from 'styled-components'

export const SelectedCoffeesDisplayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding-bottom: 1.5rem;
`

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 1.25rem;
`

export const CoffeInfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const CoffeeInputGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const TrashButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0 0.5rem;
  border-radius: 6px;
  border: 1px solid transparent;
  font-size: 0.75rem;
  cursor: pointer;

  background: ${(props) => props.theme['base-button']};

  & :not(span) {
    color: ${(props) => props.theme['purple-500']};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
  }

  &.selected {
    background-color: ${(props) => props.theme['purple-200']};
    border-color: ${(props) => props.theme['purple-500']};
  }
`
