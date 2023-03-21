import RSProTitle from '@/components/text/RSProTitle'
import Head from 'next/head'

export default function Contacto() {
  return (
    <>
      <Head>
        <title>RSPro.es | Contacto</title>
        <meta name="description" content="Contacto de RSPro" />
      </Head>

      <section className="flex flex-col items-center gap-20 py-10">
        <RSProTitle>Contacto</RSProTitle>

        <article className="w-full">
          <iframe
            className="w-2/3 mx-auto"
            style={{
              height: '1346px'
            }}
            sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-downloads allow-modals"
            aria-label="Google Forms, Datos de contacto RSPro.es"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdimdqZuD77mfQpTrKzIto3Tgk1BZhnQH2Auza76OmWhUJQ-w/viewform?embedded=true"></iframe>
        </article>
      </section>
    </>
  )
}
