import { Pin, Tumbler } from 'components/tumbler'
import { LoremIpsum } from 'components/lorem-ipsum'
import type { ReactNode } from 'react'

export default function TumblerPage(): ReactNode {
  return (
    <Tumbler>
      <Pin>
        <LoremIpsum grafs={ 1 } ipsum='gibson' />
      </Pin>

      <Pin primary>
        <LoremIpsum ipsum='bluth' />
      </Pin>

      <Pin>
        <LoremIpsum grafs={ 2 } ipsum='constitution' />
      </Pin>
    </Tumbler>
  )
}
