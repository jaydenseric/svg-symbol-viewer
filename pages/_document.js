import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head />
        <body>
          <Main />
          <NextScript />
          {!!process.env.GA_TRACKING_ID && (
            <>
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;ga('create', '${process.env.GA_TRACKING_ID}', 'auto');ga('send', 'pageview')`
                }}
              />
              <script async src="https://google-analytics.com/analytics.js" />
            </>
          )}
        </body>
      </Html>
    )
  }
}
