import { Pin, Tumbler } from 'components/tumbler'
import { LoremIpsum } from 'components/lorem-ipsum'
import type { ReactNode } from 'react'

export default function TumblerPage(): ReactNode {
  return (
    <Tumbler>
      <Pin>
        <LoremIpsum ipsum='genesis' />
      </Pin>

      <Pin>
        <LoremIpsum ipsum='bluth' />
      </Pin>

      <Pin>
        <LoremIpsum ipsum='gibson' />
      </Pin>
    </Tumbler>
  )
}
