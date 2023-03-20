import { useRouter } from 'next/router'

import RSProHeader from '@/components/RSProHeader'
import RSProFooter from '@/components/RSProFooter'
import Image from 'next/image'

export default function RSProPagesLayout({ children }: { children: JSX.Element }) {
  const router = useRouter()
  const { pathname } = router

  const includeLogo = pathname === '/presentacion' || pathname === '/contacto'

  return (
    <>
      {includeLogo ? (
        <Image
          className="mx-auto"
          src="/images/logo2.jpg"
          alt="RSPro.es"
          width={460}
          height={460}
        />
      ) : (
        <RSProHeader />
      )}
      {children}
      <RSProFooter />
    </>
  )
}
