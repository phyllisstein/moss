import { Context, Hyper, Reader, Text } from 'components'
import type { ReactElement } from 'react'

export default function ContextPage(): ReactElement {
  return (
    <Hyper>
      <Context />
      <Reader />
      <Text />
    </Hyper>
  )
}
