import { Lorem, Pin, Tumbler } from 'components'
import type { ReactNode } from 'react'

export default function TumblerPage(): ReactNode {
  return (
    <Tumbler>
      <Pin>
        <Lorem ipsum='genesis' />
      </Pin>

      <Pin primary>
        <Lorem ipsum='bluth' />
      </Pin>

      <Pin>
        <Lorem ipsum='gibson' />
      </Pin>
    </Tumbler>
  )
}
