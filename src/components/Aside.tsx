import Image from 'next/image'
import Navigation from './Navigation'

export default function Aside() {
  return (
    <aside className="fixed top-0 w-1/5 bottom-0 bg-customBlack p-10 text-white">
      <div className="flex flex-col justify-between gap-10">
        <div className="p-2">
          <Image src="/images/logo.jpg" width={31} height={31} alt="Logo de RSPro" />
        </div>

        <h2 className="text-2.5xl px-2 pb-3">RSPro.es</h2>

        <Navigation />
      </div>
    </aside>
  )
}
