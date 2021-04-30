import { AdobeClean, AdobeCleanSerif } from 'styles/fonts'
import { Helmet, HelmetProvider } from 'react-helmet-async'
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
    <HelmetProvider>
      <StyleSheetManager disableVendorPrefixes>
        <StyledThemeProvider theme={ theme }>
          <AdobeClean />
          <AdobeCleanSerif />

          <Body />

          <Helmet defaultTitle='Moss' titleTemplate='%s | Moss'>
            <html
              className='spectrum spectrum--dark spectrum--medium'
              lang='en' />
          </Helmet>

          <Component { ...pageProps } />
        </StyledThemeProvider>
      </StyleSheetManager>
    </HelmetProvider>
  )
}
