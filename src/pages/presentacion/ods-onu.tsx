import Head from 'next/head'

import RSProArticleLayout from '@/components/layout/RSProArticleLayout'
import RSProMission from '@/components/layout/RSProMission'
import RSProObjetivos from '@/components/layout/RSProObjetivos'
import RSProAboutInfo from '@/components/layout/RSProAboutInfo'
import RSProTitle from '@/components/text/RSProTitle'
import Image from 'next/image'
import RSProButtonLink from '@/components/buttons/RSProButtonLink'

const ODS_ONU = [
  {
    id: 1,
    title: 'Fin de la pobreza',
    image: '/images/ods-onu/1-pobreza.jpg',
    href: 'https://sdgs.un.org/es/goals/goal1'
  },
  {
    id: 2,
    title: 'Hambre cero',
    image: '/images/ods-onu/2-hambre.jpg',
    href: 'https://sdgs.un.org/es/goals/goal2'
  },
  {
    id: 3,
    title: 'Salud y bienestar',
    image: '/images/ods-onu/3-salud.jpg',
    href: 'https://sdgs.un.org/es/goals/goal3'
  },
  {
    id: 4,
    title: 'Educación de calidad',
    image: '/images/ods-onu/4-educacion.jpg',
    href: 'https://sdgs.un.org/es/goals/goal4'
  },
  {
    id: 5,
    title: 'Igualdad de género',
    image: '/images/ods-onu/5-genero.jpg',
    href: 'https://sdgs.un.org/es/goals/goal5'
  },
  {
    id: 6,
    title: 'Agua limpia y saneamiento',
    image: '/images/ods-onu/6-agua.jpg',
    href: 'https://sdgs.un.org/es/goals/goal6'
  },
  {
    id: 7,
    title: 'Energía asequible y no contaminante',
    image: '/images/ods-onu/7-energia.jpg',
    href: 'https://sdgs.un.org/es/goals/goal7'
  },
  {
    id: 8,
    title: 'Trabajo decente y crecimiento económico',
    image: '/images/ods-onu/8-trabajo.jpg',
    href: 'https://sdgs.un.org/es/goals/goal8'
  },
  {
    id: 9,
    title: 'Industria, innovación e infraestructuras',
    image: '/images/ods-onu/9-industria.jpg',
    href: 'https://sdgs.un.org/es/goals/goal9'
  },
  {
    id: 10,
    title: 'Reducción de las desigualdades',
    image: '/images/ods-onu/10-desigualdades.jpg',
    href: 'https://sdgs.un.org/es/goals/goal10'
  },
  {
    id: 11,
    title: 'Ciudades y comunidades sostenibles',
    image: '/images/ods-onu/11-ciudades.jpg',
    href: 'https://sdgs.un.org/es/goals/goal11'
  },
  {
    id: 12,
    title: 'Producción y consumo responsables',
    image: '/images/ods-onu/12-produccion.jpg',
    href: 'https://sdgs.un.org/es/goals/goal12'
  },
  {
    id: 13,
    title: 'Acción por el clima',
    image: '/images/ods-onu/13-clima.jpg',
    href: 'https://sdgs.un.org/es/goals/goal13'
  },
  {
    id: 14,
    title: 'Vida submarina',
    image: '/images/ods-onu/14-vida_submarina.jpg',
    href: 'https://sdgs.un.org/es/goals/goal14'
  },
  {
    id: 15,
    title: 'Vida de ecosistemas terrestres',
    image: '/images/ods-onu/15-ecosistemas.jpg',
    href: 'https://sdgs.un.org/es/goals/goal15'
  },
  {
    id: 16,
    title: 'Paz, justicia e instituciones sólidas',
    image: '/images/ods-onu/16-paz.jpg',
    href: 'https://sdgs.un.org/es/goals/goal16'
  },
  {
    id: 17,
    title: 'Alianzas para lograr los objetivos',
    image: '/images/ods-onu/17-alianzas.jpg',
    href: 'https://sdgs.un.org/es/goals/goal17'
  },
  {
    id: 18,
    title: 'Todos los Objetivos del Desarrollo Sostenible',
    image: '/images/ods-onu/todos-objetivos.jpg',
    href: 'https://sdgs.un.org/es/goals'
  },
  {
    id: 19,
    title: '¡Actúa!',
    image: '/images/ods-onu/actua.jpg',
    href: '/'
  }
]

export default function OdsOnuPage() {
  return (
    <>
      <Head>
        <title>RSPro.es | ODS ONU</title>
        <meta
          name="description"
          content="Selecciona un Objetivo de Desarrollo Sostenible para tu proyecto."
        />
      </Head>

      <section>
        <RSProArticleLayout bordered>
          <RSProMission>Proyectos RSPro</RSProMission>
        </RSProArticleLayout>

        <RSProArticleLayout bordered>
          <div className="flex flex-col gap-20">
            <RSProObjetivos includeImage={false} />
            <RSProAboutInfo />
          </div>
        </RSProArticleLayout>

        <RSProArticleLayout bordered>
          <div className="flex flex-col gap-4">
            <RSProTitle>
              Selecciona un Objetivo de Desarrollo Sostenible (ONU) para tu proyecto:
            </RSProTitle>
            <span className="text-xs">(escoge un objetivo)</span>
          </div>

          <section className="grid grid-cols-4 gap-y-8">
            {ODS_ONU.map((ods) => (
              <article key={ods.id} className="flex flex-col items-center gap-3">
                <a href={ods.href} target="_blank" rel="noreferrer">
                  <Image src={ods.image} alt={ods.title} width={200} height={200} />
                </a>

                <span className="text-sm uppercase text-center">{ods.title}</span>
              </article>
            ))}
          </section>
        </RSProArticleLayout>

        <div className="my-12">
          <RSProButtonLink href="/proyectos">Encuentra proyectos</RSProButtonLink>
        </div>
      </section>
    </>
  )
}
