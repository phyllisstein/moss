import chroma from 'chroma-js'
import R from 'ramda'
import { js as spectrumJs } from './spectrum-palette'

export const js = {
  ...spectrumJs,
  text: chroma('#000').alpha(0.87),
}

export type JS = typeof js
export type CSS = { [k in keyof JS]: string }

export const css: CSS = R.map(R.invoker(0, 'css'), js)
