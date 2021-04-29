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

    font-size: 0;
    line-height: 1.333;

    font-kerning: normal;
    font-variant-ligatures: common-ligatures;
    font-variant-numeric: oldstyle-nums proportional-nums;
  }

  body {
    ${({ theme }) => theme.typeface.primaryFamily}

    margin: 0;
    padding: 0;

    color: ${({ theme }) => theme.palette.css.text};
  }
`
