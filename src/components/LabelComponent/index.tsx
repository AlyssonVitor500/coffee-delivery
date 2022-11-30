import { LabelContainer } from './styles'

interface LabelComponentProps {
  labelText: string
}

export function LabelComponent({ labelText }: LabelComponentProps) {
  return <LabelContainer>{labelText}</LabelContainer>
}
