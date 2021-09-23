import Head from 'next/head'
import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>Jardim Caipira</title>
    </Head>
    <Component {...pageProps} />
  </>
)

export default MyApp
