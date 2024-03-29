/* eslint-disable sort-keys */

import chroma from 'chroma-js'
import * as R from 'ramda'

export const js = {
  gray900: chroma('hsl(0, 0%, 100%)'),
  gray800: chroma('hsl(0, 0%, 89%)'),
  gray700: chroma('hsl(0, 0%, 73%)'),
  gray600: chroma('hsl(0, 0%, 56%)'),
  gray500: chroma('hsl(0, 0%, 43%)'),
  gray400: chroma('hsl(0, 0%, 35%)'),
  gray300: chroma('hsl(0, 0%, 29%)'),
  gray200: chroma('hsl(0, 0%, 24%)'),
  gray100: chroma('hsl(0, 0%, 20%)'),
  gray75: chroma('hsl(0, 0%, 18%)'),
  gray50: chroma('hsl(0, 0%, 15%)'),
  blue700: chroma('hsl(210, 94%, 67%)'),
  blue600: chroma('hsl(211, 89%, 63%)'),
  blue500: chroma('hsl(212, 86%, 58%)'),
  blue400: chroma('hsl(213, 83%, 54%)'),
  green700: chroma('hsl(161, 55%, 52%)'),
  green600: chroma('hsl(161, 53%, 47%)'),
  green500: chroma('hsl(161, 54%, 44%)'),
  green400: chroma('hsl(160, 55%, 40%)'),
  orange700: chroma('hsl(33, 100%, 68%)'),
  orange600: chroma('hsl(33, 94%, 61%)'),
  orange500: chroma('hsl(33, 89%, 54%)'),
  orange400: chroma('hsl(32, 80%, 50%)'),
  red700: chroma('hsl(357, 100%, 74%)'),
  red600: chroma('hsl(357, 90%, 70%)'),
  red500: chroma('hsl(357, 79%, 64%)'),
  red400: chroma('hsl(357, 73%, 59%)'),
  seafoam700: chroma('hsl(183, 68%, 46%)'),
  seafoam600: chroma('hsl(182, 68%, 43%)'),
  seafoam500: chroma('hsl(182, 68%, 39%)'),
  seafoam400: chroma('hsl(182, 70%, 35%)'),
  indigo700: chroma('hsl(240, 91%, 77%)'),
  indigo600: chroma('hsl(240, 87%, 74%)'),
  indigo500: chroma('hsl(240, 82%, 70%)'),
  indigo400: chroma('hsl(240, 78%, 66%)'),
  purple700: chroma('hsl(267, 78%, 73%)'),
  purple600: chroma('hsl(267, 73%, 68%)'),
  purple500: chroma('hsl(267, 68%, 64%)'),
  purple400: chroma('hsl(267, 63%, 59%)'),
  fuchsia700: chroma('hsl(295, 81%, 67%)'),
  fuchsia600: chroma('hsl(295, 74%, 61%)'),
  fuchsia500: chroma('hsl(295, 69%, 55%)'),
  fucsia400: chroma('hsl(295, 59%, 51%)'),
  magenta700: chroma('hsl(327, 87%, 69%)'),
  magenta600: chroma('hsl(327, 79%, 64%)'),
  magenta500: chroma('hsl(327, 73%, 59%)'),
  magenta400: chroma('hsl(327, 67%, 53%)'),
  yellow700: chroma('hsl(52, 100%, 49%)'),
  yellow600: chroma('hsl(52, 100%, 59%)'),
  yellow500: chroma('hsl(52, 100%, 46%)'),
  yellow400: chroma('hsl(51, 100%, 44%)'),
  chartreuse700: chroma('hsl(92, 92%, 66%)'),
  chartreuse600: chroma('hsl(92, 80%, 63%)'),
  chartreuse500: chroma('hsl(92, 69%, 58%)'),
  chartreuse400: chroma('hsl(92, 60%, 54%)'),
  celery700: chroma('hsl(130, 69%, 61%)'),
  celery600: chroma('hsl(130, 59%, 57%)'),
  celery500: chroma('hsl(130, 50%, 53%)'),
  celery400: chroma('hsl(130, 45%, 49%)'),
}

export type JS = typeof js
export type CSS = { [k in keyof JS]: string }

export const css: CSS = R.map(R.invoker(0, 'css'), js)
