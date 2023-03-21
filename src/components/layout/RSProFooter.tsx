import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-8 p-8">
      <Link href="/">
        <Image src="/images/logo2.jpg" alt="RSPro logo" width={260} height={260} />
      </Link>

      <Link href="/" className="text-center text-blue-600 underline">
        RSPro.es
      </Link>
      <ul className="flex gap-6 items-center">
        <li>
          <Link className="text-center text-blue-600 underline" href="/">
            Términos y condiciones
          </Link>
        </li>
        |
        <li>
          <Link className="text-center text-blue-600 underline" href="/">
            Privacidad
          </Link>
        </li>
        |
        <li>
          <Link className="text-center text-blue-600 underline" href="/">
            Contacto
          </Link>
        </li>
      </ul>
    </footer>
  )
}
