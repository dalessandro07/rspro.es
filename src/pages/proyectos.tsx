import Head from 'next/head'

import RSProArticleLayout from '@/components/index/RSProArticleLayout'
import Image from 'next/image'

const projects = [
  {
    title: 'Petroglifos de Polish y Bello Horizonte',
    image: '/images/proyectos/petroglifos.jpg',
    author: 'Xavier García',
    location: 'Tarapoto (Perú)',
    period: '2021-2022',
    objective:
      'Promocionar los petroglifos de Polish para protegerlos y ponerlos en valor mediante las tecnologías 3D.'
  },
  {
    title: 'Fósiles de Megafauna en Juan Guerra',
    image: '/images/proyectos/fosiles.jpg',
    author: 'Xavier García',
    location: 'Distrito de Juan Guerra, región de San Martín (Perú)',
    period: '2022',
    objective:
      'Propuesta de apoyo para la creación de infraestructura cultural y turística basada en los fósiles de megafauna de la zona para su inclusión en la oferta turística y puesta en valor de su pasado natural para la paleontología.'
  }
]

export default function Proyectos() {
  return (
    <>
      <Head>
        <title>RSPro.es | Proyectos RSPro</title>
        <meta name="description" content="Proyectos de RSPro" />
      </Head>

      <RSProArticleLayout bordered>
        <header className="flex flex-col items-center gap-10">
          <h2 className="text-blue-600 text-2xl font-bold font-lato">
            RSPro = Responsabilidad Social Profesional
          </h2>

          <div className="flex flex-col items-center gap-2">
            <h2 className="text-red-600 text-4xl font-bold font-lato">
              Listado de proyectos RSPro registrados
            </h2>
            <span className="text-gray-600 text-xs">Búsqueda de proyectos u OSD con la lupa.</span>
          </div>
        </header>
      </RSProArticleLayout>

      <section className="flex flex-col">
        <>
          {projects.map((project, index) => (
            <RSProArticleLayout key={index} bordered>
              <article className="flex gap-10">
                <Image
                  className="object-cover"
                  src={project.image}
                  alt={project.title}
                  width={320}
                  height={320}
                />
                <div className="flex flex-col gap-6">
                  <h3 className="text-2xl font-bold text-blue-600 underline">{project.title}</h3>
                  <div>
                    <span className="font-bold">Autor: </span>
                    <span>{project.author}</span>
                  </div>
                  <div>
                    <span className="font-bold">Localización: </span>
                    <span>{project.location}</span>
                  </div>
                  <div>
                    <span className="font-bold">Período: </span>
                    <span>{project.period}</span>
                  </div>
                  <div>
                    <span className="font-bold">Objetivo: </span>
                    <span>{project.objective}</span>
                  </div>
                </div>
              </article>
            </RSProArticleLayout>
          ))}
        </>
      </section>
    </>
  )
}
