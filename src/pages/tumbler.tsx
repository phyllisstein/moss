import { Pin, Tumbler } from 'components/tumbler'
import { Lorem } from 'components/lorem'
import type { ReactNode } from 'react'

export default function TumblerPage(): ReactNode {
  return (
    <Tumbler>
      <Pin>
        <Lorem grafs={ 4 } ipsum='genesis' />
      </Pin>

      <Pin primary>
        <Lorem grafs={ 5 } ipsum='bluth' />
      </Pin>

      <Pin>
        <Lorem ipsum='gibson' />
      </Pin>
    </Tumbler>
  )
}
