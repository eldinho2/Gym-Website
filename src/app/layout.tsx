import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  weight: ['400', '700'],
  variable: '--font-poppins',
  subsets: ['latin'],
})

export const metadata = {
  title: 'FlexZone',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`bg-black ${poppins.variable} overflow-x-hidden font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
