import type { Metadata, ResolvingMetadata } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'
import { createClient } from '@/prismicio'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'

// getting fonts from google fonts
const nunito = Nunito(
  {
    subsets: ['latin'],
    variable: '--font-nunito',
    display: "swap"
  }
)

const NunitoSan = Nunito_Sans(
  {
    subsets: ['latin'],
    variable: '--font-nunito-sans',
    display: "swap"
  }
)

// fetching meta data from prismic 
export async function generateMetadata(): Promise<Metadata> {
  const data = createClient();
  const res = await data.getSingle('settings')
  return {
    title: res.data.site_title,

    openGraph: {
      description: res.data.meta_description || 'Eazy!!!',
      images: [res.data.meta_image.url || ""]
    },
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx(nunito.variable, NunitoSan.variable)}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
