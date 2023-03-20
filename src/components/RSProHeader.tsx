const bgImageStyle = {
  backgroundImage: 'url(/images/banner.jpg)',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

export default function RSProHeader() {
  return (
    <header style={bgImageStyle} className="flex justify-center items-end w-full min-h-[380px]">
      <div className="flex flex-col justify-center gap-3 items-center text-white pb-16">
        <h1 className="font-semibold font-lato text-2xl">
          Proyectos de Responsabilidad Social Profesional
        </h1>

        <span className="italic">RSPro: Explore sus capacidades más allá de lo profesional</span>
      </div>
    </header>
  )
}
