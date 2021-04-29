import type { HTMLAttributes, ReactElement, ReactNode } from 'react'
import { Root } from './cross-section-article-styles'
import { useSpring } from 'react-spring'

interface Props extends HTMLAttributes<HTMLElement> {
  children?: ReactNode | ReactNode[]
  scrollTo?: string
}

export function CrossSectionArticle({
  children,
  scrollTo = '50%',
  ...rest
}: Props): ReactElement {
  const animation = useSpring({
    to: {
      y: scrollTo,
    },
  })

  return (
    <Root { ...rest } style={ animation }>
      { children }
    </Root>
  )
}
