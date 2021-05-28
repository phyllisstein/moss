import { ExplainerHistory, ExplainerItem } from 'components/explainer'
import type { ReactElement } from 'react'

export default function ExplainedPage(): ReactElement {
  return (
    <ExplainerHistory>
      <ExplainerItem />
      <ExplainerItem />
      <ExplainerItem />
    </ExplainerHistory>
  )
}
