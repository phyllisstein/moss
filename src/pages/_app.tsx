import { AdobeClean, AdobeCleanSerif } from 'styles/fonts'
import {
  ThemeProvider as StyledThemeProvider,
  StyleSheetManager,
} from 'styled-components'
import type { AppProps } from 'next/app'
import { Body } from 'styles/globals'
import type { ReactElement } from 'react'
import { theme } from 'styles/theme'

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <StyledThemeProvider theme={ theme }>
        <AdobeClean />
        <AdobeCleanSerif />
        <Body />
        <Component { ...pageProps } />
      </StyledThemeProvider>
    </StyleSheetManager>
  )
}
