import { getValueAndUnit, modularScale } from 'polished'

type ValueAndUnit = [number, string]

export const css = (step = 0): string =>
  modularScale(step, '1rem', 'minorThird')

export const unitless = (step = 0): number => {
  const vu = getValueAndUnit(css(step)) as ValueAndUnit
  if (vu.length == null) {
    return 0
  }

  return vu[0]
}
