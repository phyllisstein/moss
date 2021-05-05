import * as ipsa from './ipsa'
import _ from 'lodash'
import { P } from '../elements'
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
    const grafCount = grafs || lora.length - 1
    const selected = R.take(grafCount, lora)

    return R.map(l => <P key={ l.length }>{ l }</P>, selected)
  }, [grafs, ipsum])

  return grafElements
}
