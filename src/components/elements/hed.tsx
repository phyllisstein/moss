import type { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

interface StyledHedProps {
  $accent: boolean
  $size: number
}

const StyledHed = styled.h1<StyledHedProps>`
  ${ ({ $accent, $size, theme }) => {
    const fontSize = 12 - $size
    const plumberProps = {
      fontSize,
      lineHeight: fontSize ** 2,
    }

    return $accent
      ? theme.typeface.accent(plumberProps)
      : theme.typeface.primary(plumberProps)
  } }
`

interface HedProps {
  accent?: boolean
  children?: ReactNode
  size: number
}

export function Hed({ accent, children, size }: HedProps): ReactElement {
  return (
    <StyledHed $accent={ !!accent } $size={ size }>
      { children }
    </StyledHed>
  )
}
