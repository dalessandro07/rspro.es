import Head from 'next/head'
import Image from 'next/image'

import RSProPresentationSection from '@/components/presentation/RSProPresentationSection'
import RSProButton from '@/components/index/RSProButton'

const paragraphs1 = [
  'RSPro es la forma de referirse a una filosofía basada en la Responsabilidad Social Profesional.',
  'La Responsabilidad Social Profesional (RSPro) se refiere a la obligación que tienen los profesionales de ejercer su labor considerando no solo los intereses de sus clientes o empleadores, sino también el impacto que su trabajo puede tener en la sociedad, el medio ambiente y las comunidades locales. La RSPro implica actuar con ética, transparencia y respeto hacia los derechos humanos, el medio ambiente y las normas y leyes vigentes, contribuyendo así al desarrollo sostenible de la sociedad en su conjunto. En resumen, la RSPro es el compromiso que asumen los profesionales para actuar con responsabilidad y consciencia social en su práctica laboral. ',
  'Esta filosofía es la convicción de todo profesional que decide crecer explorando nuevas experiencias basando su modo de acción en proyectos personales con efectos socioeconómicos, culturales, ecológicos, científicos o innovadores de carácter constructivo y humanista.',
  'El sitio Web RSPro.es pretende ser un punto de divulgación de proyectos bajo esta mentalidad o filosofía de actuación. Los proyectos RSPro que se muestran se relacionan adicionalmente con los diferentes Objetivos del Desarrollo Sostenible (ODS) de las Organización de las Naciones Unidas (ONU).',
  'En definitiva, RSPro.es es la forma de compartir la experiencia vivida en proyectos RSPro con otras personas para inspirar nuevos retos que con el tiempo aporten mejoras en el mundo.'
]

const paragraphs2 = [
  'La filosofía RSPro pretende que los profesionales traten de fijar objetivos, mediante la gestión de sus propios proyectos para poner a prueba sus conocimientos y habilidades con el objetivo de superarlos.',
  'Cada proyecto debe clasificar su aporte con uno o varios Objetivos del Desarrollo Sostenible (o ODS) de la ONU siendo una inspiración adicional para su desarrollo.',
  'El propio proceso de desarrollo de cada proyecto provoca el cambio y crecimiento del profesional. Compartir lo aprendido y los resultados obtenidos resulta en una motivación adicional para ayudar a lograr los objetivos planificados.',
  'La publicación del proyecto y de sus resultados para compartirlos suele abrir nuevos caminos, inquietudes, puntos de vista, contactos y colaboraciones para el profesional que lo ha desarrollado.',
  'Un perfil profesional con proyectos RSPro se presupone con habilidades muy valiosas en el entorno profesional.'
]

const paragraphs3 = [
  'RSPro es un término utilizado para definir aquellos proyectos creados por personas y canalizados mediante sus habilidades, conocimientos académicos o profesiones para fines sociales con impacto positivo en la sociedad.'
]

const paragraphs4 = [
  'RSPro, Responsabilidad Social Profesional, responde en 2012 a la necesidad de su promotor a poder encontrar la forma de poder unificar la necesidad de mezclar el aprendizaje mediante la experimentación, fomentar el emprendimiento, con actitud focalizada en la acción, para devolver a la sociedad los resultados y enseñanzas adquiridas durante el proceso, así como motivar a otros ciudadanos a seguir esta filosofía constructiva. En definitiva, ciudadanos emprendedores crean cambios sociales, se enfrentan a retos ambientales, de desarrollo, culturales, humanos, así como son más predispuestos a crear mejoras personales, profesionales, mejoras en sus empresas, nuevos negocios, empleos y productos bajo aspectos de valores humanistas.',
  'El promotor de esta filosofía anima a todas aquellas personas a tratar de marcarse retos anuales para mantener el espíritu de crecimiento personal, no perder el camino constructivo basado en valores humanos para no olvidar el aprendizaje de evolucionar no sólo como persona, sino también para tener un perfil rico y valioso a nivel profesional y social.',
  'Un perfil RSPro con experiencia en proyectos interesantes bajo esta filosofía revertirá en un perfil de alto valor para empresas, instituciones y la sociedad.'
]

export default function Presentacion() {
  return (
    <>
      <Head>
        <title>RSPro.es | Presentación</title>
        <meta name="description" content="Presentación de RSPro" />
      </Head>

      <section className="flex py-10 flex-col items-center gap-16">
        <h1 className="text-center text-red-600 text-2xl font-bold font-lato">Presentación</h1>

        <article className="flex flex-col gap-16 w-1/2 mx-auto px-10">
          <RSProPresentationSection paragraphs={paragraphs1}>
            Responsabilidad Social Profesional (RSPro)
          </RSProPresentationSection>

          <h3 className="font-bold text-center text-2xl italic">
            &quot;ACTÚA, CRECE, INSPIRA&quot;
          </h3>

          <RSProPresentationSection paragraphs={paragraphs2}>
            Utilidad personal, valor profesional
          </RSProPresentationSection>
        </article>

        <RSProButton>Información sobre ODS de la ONU</RSProButton>

        <article className="flex flex-col gap-16 w-1/2 mx-auto px-10">
          <RSProPresentationSection paragraphs={paragraphs3}>
            Resumen del promotor de RSPro.es
          </RSProPresentationSection>

          <div className="flex flex-col gap-2">
            <Image
              src="/images/presentacion/filosofia.jpg"
              alt="Filosofía RSPro"
              width={460}
              height={460}
            />
            <p className="text-center text-gray-600 text-xs">
              La filosofía de RSPro es la de promover el emprendimiento y actuar para impactar
              positivamente em la sociedad.
            </p>
          </div>

          <RSProPresentationSection paragraphs={paragraphs4}>RSPro.es</RSProPresentationSection>
        </article>
      </section>
    </>
  )
}
