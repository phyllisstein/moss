import * as ipsa from './ipsa'
import { forwardRef, useMemo } from 'react'
import _ from 'lodash'
import { P } from '../elements'
import R from 'ramda'
import type { ReactElement } from 'react'

type Ipsa = keyof typeof ipsa

interface Props {
  grafs?: number
  ipsum: Ipsa
  refGraf?: number
}

export const LoremIpsum = forwardRef<HTMLParagraphElement, Props>(
  function LoremIpsum({ grafs, ipsum, refGraf }, ref): ReactElement {
    const grafElements = useMemo((): ReactElement[] => {
      const lora = ipsa[ipsum]
      const grafCount = grafs || lora.length - 1
      const selected = R.take(grafCount, lora)

      return selected.map((l, idx) => (
        <P key={ `${ ipsum }-${ l.length }` } ref={ idx + 1 === refGraf ? ref : null }>
          { l }
        </P>
      ))
    }, [grafs, ipsum])

    return grafElements
  },
)
