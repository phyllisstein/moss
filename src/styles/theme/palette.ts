import { js as dark } from './spectrum-dark'
import R from 'ramda'

export const js = {
  text: dark.gray800,
}

export type JS = typeof js
export type CSS = { [k in keyof JS]: string }

export const css: CSS = R.map(R.invoker(0, 'css'), js)
