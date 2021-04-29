import {
  CrossSection,
  CrossSectionArticle,
  CrossSectionColumn,
} from 'components/cross-section'
import { LoremIpsum } from 'components/lorem-ipsum'
import type { ReactNode } from 'react'

export default function CrossSectionPage(): ReactNode {
  return (
    <CrossSection>
      <CrossSectionColumn>
        <CrossSectionArticle>
          <LoremIpsum grafs={ 1 } ipsum='gibson' />
        </CrossSectionArticle>
      </CrossSectionColumn>
      <CrossSectionColumn>
        <CrossSectionArticle>
          <LoremIpsum ipsum='bluth' />
        </CrossSectionArticle>
      </CrossSectionColumn>
      <CrossSectionColumn>
        <CrossSectionArticle>
          <LoremIpsum grafs={ 1 } ipsum='constitution' />
        </CrossSectionArticle>
      </CrossSectionColumn>
    </CrossSection>
  )
}
