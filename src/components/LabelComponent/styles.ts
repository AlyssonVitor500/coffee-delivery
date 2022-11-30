import styled from 'styled-components'

export const LabelContainer = styled.span`
  padding: 0.25rem 0.5rem;
  background-color: ${(props) => props.theme['yellow-200']};
  color: ${(props) => props.theme['yellow-700']};

  border-radius: 8px;
  line-height: 1.3;
  font-weight: bold;

  font-size: 0.625rem;
`
