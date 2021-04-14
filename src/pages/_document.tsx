import Document, { Html, Head, Main, NextScript } from 'next/document'

export const siteTitle = 'Jardim Caipira'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang='pt'>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <meta
            name='description'
            content='Encontre vasos, plantas ornamentais e artigos de madeira artesanal. Marcenaria com orquídeas, rosas do deserto, cactos, suculentas e mais!'
          />
          <meta
            property='og:image'
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=200px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg&widths=50&heights=50`}
          />
          <meta
            name='google-site-verification'
            content='_cd7mw2YWYlX1KdSTwEDVxDz2n5eWnW87t8mo4WdKF8'
          />
          <meta name='og:title' content={siteTitle} />
          <meta name='twitter:card' content='summary_large_image' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
