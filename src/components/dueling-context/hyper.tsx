import type { ReactElement, ReactNode } from 'react'
import { Container } from './text-styles'

interface HyperProps {
  children: ReactNode
}

export function Hyper({ children }: HyperProps): ReactElement {
  return <Container>{ children }</Container>
}
