import * as ipsa from './ipsa'
import _ from 'lodash'
import { P } from '../fundaments'
import R from 'ramda'
import type { ReactElement } from 'react'
import { useMemo } from 'react'

type Ipsa = keyof typeof ipsa

interface Props {
  grafs?: number
  ipsum: Ipsa
}

export function LoremIpsum({ grafs, ipsum }: Props): ReactElement {
  const grafElements = useMemo((): ReactElement[] => {
    const lora = ipsa[ipsum]
    const shuffled = _.shuffle(lora)

    return R.map(
      l => <P key={ l.length }>{ l }</P>,
      R.take(grafs || shuffled.length - 1, shuffled),
    )
  }, [grafs, ipsum])

  return grafElements
}
