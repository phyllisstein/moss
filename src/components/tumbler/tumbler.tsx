import { HTMLAttributes, ReactElement, ReactNode } from 'react'
import { Inner, Wrapper } from './tumbler-styles'

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode | ReactNode[]
}

export function Tumbler({ children, ...props }: Props): ReactElement {
  return (
    <Wrapper>
      <Inner { ...props }>{ children }</Inner>
    </Wrapper>
  )
}
