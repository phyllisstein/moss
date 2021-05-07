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

type HProps = Omit<HedProps, 'size'>

export function Hed({ accent, children, size }: HedProps): ReactElement {
  return (
    <StyledHed $accent={ !!accent } $size={ size }>
      { children }
    </StyledHed>
  )
}

export const H1 = (props: HProps): ReactElement => <Hed { ...props } size={ 1 } />
export const H2 = (props: HProps): ReactElement => <Hed { ...props } size={ 2 } />
export const H3 = (props: HProps): ReactElement => <Hed { ...props } size={ 3 } />
export const H4 = (props: HProps): ReactElement => <Hed { ...props } size={ 4 } />
export const H5 = (props: HProps): ReactElement => <Hed { ...props } size={ 5 } />
export const H6 = (props: HProps): ReactElement => <Hed { ...props } size={ 6 } />
