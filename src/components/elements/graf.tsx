import styled from 'styled-components'

interface GrafProps {
  $alignment?: 'center' | 'justify' | 'left' | 'right'
  $accent?: boolean
  $indent?: boolean
}

export const P = styled.p<GrafProps>`
  ${ ({ $accent, theme }) =>
    $accent
      ? theme.typeface.accent({ fontSize: 4 })
      : theme.typeface.primary({ fontSize: 4 }) }

  text-align: ${ ({ $alignment = 'left' }) => $alignment };
  text-indent: ${ ({ $indent, theme }) =>
    $indent ? theme.typography.textIndent : 0 };

  & ~ & {
    text-indent: ${ ({ theme }) => theme.typography.textIndent };
  }

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`
