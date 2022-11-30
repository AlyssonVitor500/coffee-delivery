import { ReactNode } from 'react'
import { defaultTheme } from '../../styles/default'
import { RoundedIconButtonContainer } from './styled'

interface RoundedIconButtonProps {
  icon: ReactNode
  title: string | ReactNode
  subtitle?: string | ReactNode
  color: keyof typeof defaultTheme
}
export function RoundedIconButton({
  icon,
  color,
  title,
  subtitle,
}: RoundedIconButtonProps) {
  return (
    <RoundedIconButtonContainer backgroundItemColor={color}>
      <button className="iconButton">{icon}</button>

      {subtitle && (
        <div className="textContainer">
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
        </div>
      )}

      {!subtitle && <>{title}</>}
    </RoundedIconButtonContainer>
  )
}
