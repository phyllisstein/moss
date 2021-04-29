import type { FunctionComponent } from 'react'
import { Root } from './demo-styles'

export const DemoLayout: FunctionComponent = ({ children }) => {
  return <Root>{children}</Root>
}
