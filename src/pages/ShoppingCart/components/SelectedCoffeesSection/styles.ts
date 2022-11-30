import styled from 'styled-components'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & > h2 {
    font-size: 1.125rem;
  }
`

export const SelectedCoffeeCard = styled.div`
  display: flex;
  flex-direction: column;

  width: 450px;
  padding: 2.5rem;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;

  .coffeesDisplayContainer + .coffeesDisplayContainer {
    padding-top: 1.5rem;

    border-top: 1px solid ${(props) => props.theme['base-button']};
  }

  & > span {
    text-align: center;

    a {
      color: ${(props) => props.theme['yellow-500']};
      font-weight: bold;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme['yellow-700']};
      }
    }
  }
`

export const TotalOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
  border-top: 1px solid ${(props) => props.theme['base-button']};
  gap: 0.75rem;

  div.priceAmountContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(&:last-child) {
      & label:first-child {
        font-size: 0.875rem;
      }

      & label:last-child {
        font-size: 1rem;
      }
    }

    &:last-child {
      font-weight: bold;
      font-size: 1.25rem;
    }
  }
`

export const ConfirmOrderButton = styled.button`
  background-color: ${(props) => props.theme['yellow-500']};
  border: 1px solid transparent;
  color: ${(props) => props.theme.white};
  padding: 0.75rem;
  font-weight: bold;
  font-size: 0.875rem;
  border-radius: 6px;
  margin-top: 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['yellow-700']};
  }
`
