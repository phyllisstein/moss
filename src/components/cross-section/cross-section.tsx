import { FunctionComponent } from 'react'
import { Root } from './cross-section-styles'

export const CrossSection: FunctionComponent = ({ children }) => {
  return (
    <Root>
      { children }
    </Root>
  )
}
