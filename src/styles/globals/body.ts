import { createGlobalStyle } from 'styled-components'

export const Body = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: always;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
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
    ${ ({ theme }) => theme.typeface.primaryFamily }
  }
`
