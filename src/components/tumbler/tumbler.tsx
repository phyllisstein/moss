import type { HTMLAttributes, ReactElement, ReactNode } from 'react'
import { Root } from './tumbler-styles'

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode | ReactNode[]
}

export function Tumbler({ children, ...props }: Props): ReactElement {
  return <Root { ...props }>{ children }</Root>
}
