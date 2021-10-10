import { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactElement } from 'react'
import { RecoilRoot } from 'recoil'
import {
  ThemeProvider as StyledThemeProvider, StyleSheetManager,
} from 'styled-components'

import { AdobeClean, AdobeCleanSerif } from '~/assets/fonts'
import { Body } from '~/styles/globals'
import { theme } from '~/styles/theme'

export default function App ({ Component, pageProps }: AppProps): ReactElement {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <StyledThemeProvider theme={ theme }>
        <RecoilRoot>
          <AdobeClean />
          <AdobeCleanSerif />
          <Body />
          <Head>
            <title>Moss</title>
          </Head>

          <Component { ...pageProps } />
        </RecoilRoot>
      </StyledThemeProvider>
    </StyleSheetManager>
  )
}
