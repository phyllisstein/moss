import { createGlobalStyle } from 'styled-components'

export const Body = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;

    outline: none;

    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }

  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-size: 62.5% !important;

    font-kerning: normal !important;
    font-variant-ligatures: common-ligatures !important;
    font-variant-numeric: oldstyle-nums proportional-nums !important;
  }

  body {
    ${ ({ theme }) => theme.typeface.primary() }
  }
`
