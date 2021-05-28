import {
  DiegeticPane,
  EditorialPane,
  Hyper,
  ReaderPane,
} from 'components/dueling-context'
import type { ReactElement } from 'react'

export default function DuelingContextPage(): ReactElement {
  return (
    <Hyper>
      <EditorialPane />
      <ReaderPane />
      <DiegeticPane />
    </Hyper>
  )
}
