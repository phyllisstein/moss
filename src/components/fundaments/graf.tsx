import styled from 'styled-components'

interface GrafProps {
  $alignment?: 'center' | 'justify' | 'left' | 'right'
  $accent?: boolean
  $indent?: boolean
}

export const P = styled.p<GrafProps>`
  ${ ({ $accent, theme }) =>
    $accent
      ? theme.typeface.accent()
      : theme.typeface.primary({ leadingTop: 2, leadingBottom: 0 }) }

  text-align: ${ ({ $alignment = 'left' }) => $alignment };
  text-indent: ${ ({ $indent, theme }) =>
    $indent ? theme.typography.textIndent : 0 };

  & ~ p {
    text-indent: ${ ({ theme }) => theme.typography.textIndent };
  }
`
