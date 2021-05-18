import type { DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import Document from 'next/document'

export default class CustomDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage
    const sheet = new ServerStyleSheet()

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App { ...props } />),
      })

    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, styles: sheet.getStyleElement() }
  }
}
