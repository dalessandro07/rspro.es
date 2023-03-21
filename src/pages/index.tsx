import Head from 'next/head'

import RSProObjetivos from '@/components/layout/RSProObjetivos'
import RSProArticleLayout from '@/components/layout/RSProArticleLayout'
import RSProButtonLink from '@/components/buttons/RSProButtonLink'
import RSProOptions from '@/components/index/RSProOptions'
import RSProMission from '@/components/layout/RSProMission'
import RSProAboutInfo from '@/components/layout/RSProAboutInfo'

export default function Home() {
  return (
    <>
      <Head>
        <title>RSPro.es</title>
        <meta name="description" content="RSPro: Responsabilidad Social Profesional." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex flex-col gap-4 items-center">
        {/* Misión */}

        <RSProArticleLayout>
          <RSProMission>RSPro: Experimentar con responsabilidad</RSProMission>
        </RSProArticleLayout>

        <RSProButtonLink href="/proyectos">Proyectos RSPro</RSProButtonLink>

        <RSProArticleLayout bordered>
          <RSProAboutInfo />
        </RSProArticleLayout>

        {/* Objetivos */}

        <RSProArticleLayout bordered>
          <RSProObjetivos includeImage />
        </RSProArticleLayout>

        {/* Opciones */}

        <RSProArticleLayout bordered>
          <RSProOptions />
        </RSProArticleLayout>

        <RSProButtonLink href="/proyectos">Proyectos RSPro</RSProButtonLink>

        {/* Contacto */}

        <RSProArticleLayout>
          <h2 className="text-2xl text-red-600 font-semibold">¿Alguna pregunta o propuesta?</h2>

          <p className="italic text-center">Envíenos un mensaje</p>
        </RSProArticleLayout>

        <RSProButtonLink href="/contacto">Contacto</RSProButtonLink>
      </section>
    </>
  )
}

