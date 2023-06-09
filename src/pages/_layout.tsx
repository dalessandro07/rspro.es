import { Lato, Roboto } from 'next/font/google'
import Aside from '@/components/Aside'
import RSProPagesLayout from '@/components/layout/RSProPagesLayout'

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700']
})
const roboto = Roboto({
  variable: '--font-roboto',
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <div className={`${lato.variable} ${roboto.variable} min-h-screen flex w-full font-roboto`}>
      <Aside />
      <main className="flex flex-col w-4/5 ml-auto">
        <RSProPagesLayout>{children}</RSProPagesLayout>
      </main>
    </div>
  )
}
