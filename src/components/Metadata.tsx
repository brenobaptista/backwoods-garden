import Head from 'next/head'

const siteTitle = 'Backwoods Garden'

const Metadata = (): JSX.Element => (
  <Head>
    <link rel='icon' href='/favicon.ico' />
    <meta name='description' content="Backwoods Garden's Website" />
    <meta
      property='og:image'
      content={`https://og-image.now.sh/${encodeURI(
        siteTitle
      )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
    />
    <meta name='og:title' content={siteTitle} />
    <meta name='twitter:card' content='summary_large_image' />
    <title>{siteTitle}</title>
  </Head>
)

export default Metadata
