import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  width: 256px;
  height: 310px;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  position: relative;
`

export const CoffeeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: -20px;

  h3 {
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    font-size: 1.25rem;

    margin-top: 1rem;

    color: ${(props) => props.theme['base-subtitle']};
  }

  span.coffee-description {
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    padding: 0 1.25rem;
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }
`

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin-top: 0.75rem;
`

export const PriceCartContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  margin-top: 2.06rem;

  justify-content: space-between;
  padding: 0 1.5rem;

  & > span {
    font-family: 'Baloo 2', cursive;

    b {
      font-size: 1.5rem;
    }
  }
`

export const CoffeeAmountContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const AddCoffeeInCartButton = styled.button`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['purple-700']};
  cursor: pointer;

  border-radius: 6px;
  padding: 8px;

  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) => props.theme['purple-500']};
  }
`
