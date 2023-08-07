import Head from 'next/head'
import { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import 'tailwindcss/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Jardim Caipira</title>
    </Head>
    <div className={`${inter.variable} font-sans antialiased`}>
      <Component {...pageProps} />
    </div>
  </>
)

export default MyApp
