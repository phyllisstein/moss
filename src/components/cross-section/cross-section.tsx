import type { HTMLAttributes, ReactElement, ReactNode } from 'react'
import { Root } from './cross-section-styles'

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode | ReactNode[]
}

export function CrossSection({ children, ...props }: Props): ReactElement {
  return (
    <Root { ...props }>{ children }</Root>
  )
}
