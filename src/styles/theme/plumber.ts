import _ from 'lodash'
import { getValueAndUnit } from 'polished'
import { css, SimpleInterpolation } from 'styled-components'

import { unitless } from './scale'

// (UnitsPerEm − hhea.Ascender − hhea.Descender) / (2 × UnitsPerEm)
const BASELINE = {
  ADOBE_CLEAN: 0.113,
  ADOBE_CLEAN_SERIF: 0.113,
}

const round = _.partial(_.round, _.partial.placeholder, 0)

type BaselineCorrection = (config: { baseline: number, fontSize: number, lineHeight: number }) => { baselineDifference: number, correctedBaseline: number }

const getBaselineCorrection: BaselineCorrection = ({ baseline, fontSize, lineHeight }) => {
  const baselineFromBottom = (lineHeight - fontSize) / 2 + fontSize * baseline
  const correctedBaseline = baselineFromBottom
  const baselineDifference = correctedBaseline - baselineFromBottom

  return {
    baselineDifference,
    correctedBaseline,
  }
}

export interface PlumberOptions {
  baseline: number
  fontSize?: number
  gridHeight?: string
  leadingBottom?: number
  leadingTop?: number
  lineHeight?: number
  useBaselineOrigin?: boolean
}

export type PlumberFunction = (options: Partial<PlumberOptions>) => SimpleInterpolation

const getPlumber = ({
  baseline: B,
  fontSize: FONT_SIZE = 1,
  gridHeight: GRID_HEIGHT = '1rem',
  leadingBottom: LEADING_BOTTOM = 0,
  leadingTop: LEADING_TOP = 0,
  lineHeight: LINE_HEIGHT,
  useBaselineOrigin: USE_BASELINE_ORIGIN = false,
}: PlumberOptions): PlumberFunction => {
  const plumber = ({
    baseline = B,
    fontSize = FONT_SIZE,
    gridHeight = GRID_HEIGHT,
    leadingBottom = LEADING_BOTTOM,
    leadingTop = LEADING_TOP,
    lineHeight = LINE_HEIGHT,
    useBaselineOrigin = USE_BASELINE_ORIGIN,
  }: Partial<PlumberOptions> = {}): SimpleInterpolation => {
    const [gridHeightValue, gridHeightUnit] = getValueAndUnit(gridHeight)
    const scaledFontSize = unitless(fontSize)

    lineHeight =
      lineHeight == null ? unitless(1.333 * fontSize) : unitless(lineHeight)

    const { baselineDifference, correctedBaseline } = getBaselineCorrection({
      baseline,
      fontSize: scaledFontSize,
      lineHeight,
    })

    if (useBaselineOrigin) {
      leadingTop -= lineHeight - correctedBaseline
      leadingBottom -= correctedBaseline
    }

    const shift = baselineDifference < 0 ? 0 : 1

    const gridFontSize = scaledFontSize * gridHeightValue
    const marginTop = (leadingTop - shift) * gridHeightValue
    const paddingTop = (shift - baselineDifference) * gridHeightValue
    const paddingBottom = (1 - shift + baselineDifference) * gridHeightValue
    const marginBottom = (leadingBottom + shift - 1) * gridHeightValue

    return css`
      margin-top: ${ marginTop }${ gridHeightUnit };
      margin-bottom: ${ marginBottom }${ gridHeightUnit };
      padding-top: ${ paddingTop }${ gridHeightUnit };
      padding-bottom: ${ paddingBottom }${ gridHeightUnit };

      font-size: ${ gridFontSize }${ gridHeightUnit };
      line-height: ${ lineHeight }${ gridHeightUnit };
    `
  }

  plumber.box = function ({
    border = ['0px', '0px'],
    gridHeight = GRID_HEIGHT,
    margin = [0, 0],
    padding = [0, 0],
  }) {
    const [gridHeightValue, gridHeightUnit] = getValueAndUnit(gridHeight)

    const [marginTop, marginBottom] = margin.map(m =>
      round(m * gridHeightValue),
    )
    const [paddingTop, paddingBottom] = padding.map(p =>
      round(p * gridHeightValue),
    )
    const [borderTop, borderBottom] = border

    return css`
      margin-top: ${ marginTop }${ gridHeightUnit };
      margin-bottom: ${ marginBottom }${ gridHeightUnit };
      padding-top: calc(${ paddingTop }${ gridHeightUnit } - ${ borderTop });
      padding-bottom: calc(${ paddingBottom }${ gridHeightUnit } - ${ borderBottom });
    `
  }

  return plumber
}

export const primary = getPlumber({ baseline: BASELINE.ADOBE_CLEAN })
export const accent = getPlumber({ baseline: BASELINE.ADOBE_CLEAN_SERIF })
