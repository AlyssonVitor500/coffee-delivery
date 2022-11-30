import styled from 'styled-components'

interface CoffeeAmountContainerInputProps {
  isSelectedCoffeesSection: boolean
}
export const CoffeeAmountContainerInput = styled.div<CoffeeAmountContainerInputProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.25rem;

  min-width: 4.375rem;

  height: ${(props) => (props.isSelectedCoffeesSection ? '2rem' : '2.375rem')};

  line-height: 1.3;
  padding: 8px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};

  color: ${(props) => props.theme['purple-500']};

  span {
    color: ${(props) => props.theme['base-title']};
    cursor: default;
  }

  cursor: pointer;

  .minus:hover,
  .plus:hover {
    color: ${(props) => props.theme['purple-700']};
  }
`
