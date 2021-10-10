import { css, SimpleInterpolation } from 'styled-components'

import { accent as plumberAccent, primary as plumberPrimary, PlumberOptions } from './plumber'

export const accent = (plumberOpts: Partial<PlumberOptions> = {}): SimpleInterpolation => css`
  ${ accentFamily }
  ${ plumberAccent(plumberOpts) }
`

export const accentFamily = css`
  font-family: 'Adobe Clean Serif', Georgia, Garamond, 'Times New Roman',
    'Times', serif;
`

export const primary = (plumberOpts: Partial<PlumberOptions> = {}): SimpleInterpolation => css`
  ${ primaryFamily }
  ${ plumberPrimary(plumberOpts) }
`

export const primaryFamily = css`
  font-family: 'Adobe Clean', -apple-system, BlinkMacSystemFont,
    'Helvetica Neue', Helvetica, sans-serif;
`
