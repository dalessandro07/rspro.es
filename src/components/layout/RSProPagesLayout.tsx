import { useRouter } from 'next/router'

import RSProHeader from '@/components/layout/RSProHeader'
import RSProFooter from '@/components/layout/RSProFooter'
import Image from 'next/image'

export default function RSProPagesLayout({ children }: { children: JSX.Element }) {
  const router = useRouter()
  const { pathname } = router

  const includeLogo = pathname === '/presentacion' || pathname === '/contacto'

  return (
    <>
      {includeLogo ? (
        <Image
          className="mx-auto py-8"
          src="/images/logo2.jpg"
          alt="RSPro.es"
          width={320}
          height={320}
        />
      ) : (
        <RSProHeader />
      )}
      {children}
      <RSProFooter />
    </>
  )
}
