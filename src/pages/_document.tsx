import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang='pt'>
        <Head>
          <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
          <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
          <link rel='manifest' href='/site.webmanifest' />
          <meta name='theme-color' content='#548c71' />
          <meta
            name='description'
            content='Encontre vasos, plantas ornamentais e artigos de madeira artesanal. Marcenaria com orquídeas, rosas do deserto, cactos, suculentas e mais!'
          />
          <meta
            property='og:image'
            content='https://jardimcaipira.vercel.app/og-image.png'
          />
          <meta
            name='google-site-verification'
            content='_cd7mw2YWYlX1KdSTwEDVxDz2n5eWnW87t8mo4WdKF8'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
