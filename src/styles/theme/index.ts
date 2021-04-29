import * as animation from './animation'
import * as easing from './ease'
import * as elevation from './elevation'
import * as palette from './palette'
import * as plumber from './plumber'
import * as responsive from './responsive'
import * as scale from './scale'
import * as typeface from './typeface'
import * as typography from './typography'

const theme = {
  animation,
  easing,
  elevation,
  palette,
  plumber,
  responsive,
  scale,
  typeface,
  typography,
}

export type Theme = typeof theme

export { theme }

declare module 'styled-components' {
  export type DefaultTheme = Theme
}
