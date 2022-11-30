import styled from 'styled-components'

export const DefaultCard = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;
  padding: 2.5rem;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`
