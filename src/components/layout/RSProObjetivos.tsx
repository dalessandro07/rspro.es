import Image from 'next/image'
import Link from 'next/link'

export default function RSProObjetivos({ includeImage = true }: { includeImage: boolean }) {
  return (
    <>
      {includeImage && (
        <Link href="/presentacion/ods-onu">
          <Image
            className="object-contain mb-6"
            src="/images/objetivos.jpg"
            alt="Objetivos de Desarrollo Sostenible"
            width={750}
            height={750}
          />
        </Link>
      )}

      <div className="flex flex-col items-center gap-8 px-8">
        <h2 className="text-xl text-center font-bold font-lato text-red-600">
          Inspírese con los Objetivos de Desarrollo Sostenible para crear sus propios proyectos
          RSPro y pase a la acción.
        </h2>

        <h2 className="text-xl text-center font-bold font-lato text-red-600">
          ¡Impacte en su entorno!
        </h2>
      </div>
    </>
  )
}
