import type { ReactElement, ReactNode } from 'react'

interface Props {
  children: ReactNode
  endDate: string
  startDate: string
  title: string
}

export function ExplainerHistory({
  children,
  endDate,
  startDate,
  title,
}: Props): ReactElement {
  return <div>{ children }</div>
}
