import * as R from 'ramda'
import { FunctionComponent, ReactElement } from 'react'
import styled from 'styled-components'

interface StyledHedProps {
  $primary: boolean
  $size: number
}

const StyledHed = styled.h1<StyledHedProps>`
  ${ ({ $primary, $size, theme }) => {
    const fontSize = 8 - $size
    const plumberProps = {
      fontSize,
      leadingBottom: fontSize / 6,
      leadingTop: fontSize,
      lineHeight: fontSize,
    }

    return $primary
      ? theme.typeface.primary(plumberProps)
      : theme.typeface.accent(plumberProps)
  } }

  color: ${ ({ $size, theme }) => {
    if ($size > 4) {
      return theme.palette.css.gray800
    }
    return theme.palette.css.gray900
  } };
  font-weight: ${ ({ $size }) => ($size <= 4 ? '500' : '700') };
`

interface HedProps {
  primary?: boolean
  size: number
}

type HProps = Omit<HedProps, 'size'>

const clampHeader = R.clamp(1, 6)

export const Hed: FunctionComponent<HedProps> = ({ children, primary, size }) => {
  const clampedSize = clampHeader(size)

  return (
    <StyledHed $primary={ primary != null } $size={ size } as={ `h${ clampedSize }` }>
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
