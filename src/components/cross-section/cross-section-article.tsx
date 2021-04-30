import type { HTMLAttributes, ReactElement, ReactNode } from 'react'
import { Root } from './cross-section-article-styles'
import { useSpring } from 'react-spring'

interface Props extends HTMLAttributes<HTMLElement> {
  children?: ReactNode | ReactNode[]
  y?: string
}

export function CrossSectionArticle({
  children,
  y = '50%',
  ...rest
}: Props): ReactElement {
  const animation = useSpring({
    to: {
      y,
    },
  })

  return (
    <Root { ...rest } style={ animation }>
      { children }
    </Root>
  )
}
