import Link from 'next/link'

export default function RSProAboutInfo() {
  return (
    <section className="flex flex-col items-center gap-10">
      <h2 className="text-blue-600 text-4xl font-bold font-lato">
        RSPro = Responsabilidad Social Profesional
      </h2>

      <Link href="/presentacion/preguntas-frecuentes">
        <button className="border-b border-blue-600 text-blue-600 hover:text-blue-900 hover:border-blue-900 transition-all duration-200">
          Más información
        </button>
      </Link>
    </section>
  )
}
