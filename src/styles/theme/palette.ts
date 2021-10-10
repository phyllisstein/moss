import * as R from 'ramda'

import { js as spectrum } from './palette-spectrum-dark'

export const js = {
  ...spectrum,
  text: spectrum.gray900,
}

export type JS = typeof js
export type CSS = { [k in keyof JS]: string }

export const css: CSS = R.map(R.invoker(0, 'css'), js)
