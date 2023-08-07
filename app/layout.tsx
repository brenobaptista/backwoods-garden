import { ReactNode } from 'react'

import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'tailwindcss/tailwind.css'

import ThemeProvider from './ThemeProvider'

export const metadata: Metadata = {
  title: 'Jardim Caipira',
  description:
    'Encontre vasos, plantas ornamentais e artigos de madeira artesanal. Marcenaria com orquídeas, rosas do deserto, cactos, suculentas e mais!',
  themeColor: '#548c71',
  manifest: '/site.webmanifest',
  verification: {
    google: '_cd7mw2YWYlX1KdSTwEDVxDz2n5eWnW87t8mo4WdKF8'
  }
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

interface Props {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => (
  <html lang='en' className={`${inter.variable} font-sans antialiased`}>
    <body className='bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'>
      <ThemeProvider>{children}</ThemeProvider>
    </body>
  </html>
)

export default RootLayout
