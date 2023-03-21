import Link from 'next/link'
import RSProButton from './RSProButton'

export default function RSProButtonLink({
  children,
  href
}: {
  children: string | JSX.Element
  href: string
}) {
  return (
    <div className="w-full">
      <Link href={href}>
        <RSProButton>{children}</RSProButton>
      </Link>
    </div>
  )
}
