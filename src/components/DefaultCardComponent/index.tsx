import { ReactNode } from 'react'
import { DefaultCard } from './styles'

interface DefaultCardComponentProps {
  children: ReactNode
}
export function DefaultCardComponent({ children }: DefaultCardComponentProps) {
  return <DefaultCard>{children}</DefaultCard>
}
